import {
    EActionTypesExample,
    IReset,
    ISelect,
} from "../interfaces/iExample/iExampleAct.interfaces";

export function reset(): IReset {
    return { type: EActionTypesExample.RESET };
}

export function select(data: number): ISelect {
    return {
        type: EActionTypesExample.SELECT,
        teamId: data,
    };
}
