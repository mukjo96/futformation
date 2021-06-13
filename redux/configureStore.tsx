import { applyMiddleware, createStore, Middleware, StoreEnhancer } from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore: MakeStore = () => {
    const isServer = typeof window === "undefined";
    const sagaMiddleware = createSagaMiddleware();

    if (isServer) {
        const store = createStore(
            rootReducer,
            bindMiddleware([sagaMiddleware])
        );
        store.sagaTask = sagaMiddleware.run(rootSaga);
        return store;
    } else {
        const persistConfig = {
            key: "root",
            version: 1,
            blacklist: [],
            storage,
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer);

        const store: any = createStore(
            persistedReducer,
            bindMiddleware([sagaMiddleware])
        );

        store.sagaTask = sagaMiddleware.run(rootSaga);
        store.__persistor = persistStore(store);

        return store;
    }
};

export const wrapper = createWrapper(makeStore, { debug: true });
