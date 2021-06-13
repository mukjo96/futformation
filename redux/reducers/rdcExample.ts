import { HYDRATE } from "next-redux-wrapper";
import { IExampleState } from "../interfaces/iExample/iExample.interfaces";
import {
    EActionTypesExample,
    IActionsExample,
} from "../interfaces/iExample/iExampleAct.interfaces";

export const initialState: IExampleState = {
    teamId: 8491,
    teamName: "ENG",
    teamColor: "#CF081F",
    teamSubColor: "#ffffff",
};

interface HydratePayload {
    rdcExample: IExampleState;
}

const rdcExample = (
    state = initialState,

    action: IActionsExample | { type: typeof HYDRATE; payload: HydratePayload }
): IExampleState => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.rdcExample };

        case EActionTypesExample.SELECT:
            return {
                ...state,
                ...action.data,
            };

        case EActionTypesExample.RESET:
            return {
                ...state,
                ...initialState,
            };

        default:
            return state;
    }
};

export default rdcExample;
