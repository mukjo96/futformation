import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import {
    EActionTypesExample,
    IReset,
    ISelect,
} from "../interfaces/iExample/iExampleAct.interfaces";

export function reset(): IReset {
    return { type: EActionTypesExample.RESET };
}

export function select(data: IExampleState): ISelect {
    return {
        type: EActionTypesExample.SELECT,
        data,
    };
}
