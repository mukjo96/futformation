// import produce from 'immer';
// import { AnyAction } from 'redux';
import { HYDRATE } from "next-redux-wrapper";
import { IExampleState } from "../interfaces/iExample/iExample.interfaces";
import {
    EActionTypesExample,
    IActionsExample,
} from "../interfaces/iExample/iExampleAct.interfaces";

export const initialState: IExampleState = {
    teamId: 8456,
};

interface HydratePayload {
    rdcExample: IExampleState;
}

const rdcExample = (
    state = initialState,
    // action: AnyAction,
    action: IActionsExample | { type: typeof HYDRATE; payload: HydratePayload }
): IExampleState => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.rdcExample };

        case EActionTypesExample.SELECT:
            return {
                ...state,
                ...{ teamId: action.teamId },
            };

        case EActionTypesExample.RESET:
            return {
                ...state,
                ...{ teamId: initialState.teamId },
            };

        default:
            return state;
    }
};

export default rdcExample;
