export enum EActionTypesExample {
    SELECT = "SELECT",
    RESET = "RESET",
}

export type IActionsExample = ISelect | IReset;

export interface ISelect {
    type: EActionTypesExample.SELECT;
    teamId: number;
}

export interface IReset {
    type: EActionTypesExample.RESET;
}
