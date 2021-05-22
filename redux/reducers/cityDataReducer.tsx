import {
    matchDataTypes,
    newsDataTypes,
    playerListDataTypes,
    playerStatDataTypes,
} from "@features/home/api/cityDataTypes";

export interface ICityDataReducer {
    cityData: {
        matchList: Array<matchDataTypes>;
        newsList: Array<newsDataTypes>;
        currentMonth: string;
        playerList: Array<playerListDataTypes>;
        statList: Array<playerStatDataTypes>;
    };
    cityDataLoad: string;

    loadCityDataError: string;
}

const initialState: ICityDataReducer = {
    cityData: {
        matchList: [],
        newsList: [],
        currentMonth: "",
        playerList: [],
        statList: [],
    },
    cityDataLoad: "",
    loadCityDataError: "",
};

// 비동기 적인 작업을 해야하므로 요청, 성공, 실패로 액션 타입들을 만들어 줘요.
export const LOAD_CITYDATA_REQUEST = "LOAD_CITYDATA_REQUEST";
export const LOAD_CITYDATA_SUCCESS = "LOAD_CITYDATA_SUCCESS";
export const LOAD_CITYDATA_FAILURE = "LOAD_CITYDATA_FAILURE";

export const loadCitydataRequestAction = (data) => ({
    type: LOAD_CITYDATA_REQUEST,
    data,
});

export const loadCitydataSuccessAction = (data) => ({
    type: LOAD_CITYDATA_SUCCESS,
    data,
});

export const loadCitydataFailureAction = (error) => ({
    type: LOAD_CITYDATA_FAILURE,
    error,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CITYDATA_REQUEST:
            return { ...state, cityDataLoad: action.data };
        case LOAD_CITYDATA_SUCCESS:
            return {
                ...state,
                cityData: action.data,
            };
        case LOAD_CITYDATA_FAILURE:
            return { ...state, loadCityDataError: action.error };
        default:
            return state;
    }
};

export default reducer;
