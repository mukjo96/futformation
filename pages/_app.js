import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import "react-awesome-slider/dist/styles.css";
import moment from "moment";
import { wrapper } from "../redux/configureStore";
import Foot from "@features/common/footer/foot";
import NavBar from "@features/navigation/navBar";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

function MyApp({ Component, pageProps }) {
    moment.locale("ko");
    const store = useStore((state) => state);
    return (
        <>
            <Head>
                <title>FUTFORMATION football information website</title>
                <link rel="shortcut icon" href="/image/favicon.ico" />
            </Head>
            <PersistGate persistor={store.__persistor} loading={null}>
                <NavBar />
                <Component {...pageProps} />
                <Foot />
            </PersistGate>
        </>
    );
}

export default wrapper.withRedux(MyApp);
