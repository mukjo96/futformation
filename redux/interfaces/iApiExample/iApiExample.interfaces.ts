import {
    matchDataTypes,
    newsDataTypes,
    playerListDataTypes,
    playerStatDataTypes,
} from "@features/home/api/cityDataTypes";

export interface IApiResult {
    matchList: Array<matchDataTypes>;
    newsList: Array<newsDataTypes>;
    currentMonth: string;
    playerList: Array<playerListDataTypes>;
    statList: playerStatDataTypes;
}

export interface IApiExampleState {
    apiResult: IApiResult | null;
    error: null | Error;
}
