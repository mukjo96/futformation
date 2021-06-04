import { IExampleState } from "./iExample.interfaces";

export enum EActionTypesExample {
    SELECT = "SELECT",
    RESET = "RESET",
}

export type IActionsExample = ISelect | IReset;

export interface ISelect {
    type: EActionTypesExample.SELECT;
    data: IExampleState;
}

export interface IReset {
    type: EActionTypesExample.RESET;
}
