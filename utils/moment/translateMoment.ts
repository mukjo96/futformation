import moment from "moment";
import "moment/locale/ko";

export const translateLongDateToKorean = (dateString: string) => {
    let date = moment(dateString);
    return date.format("YYYY년 MMMM Do dddd");
};

export const translateShortDateToKorean = (dateString: string) => {
    let date = moment(dateString);
    return date.format("MMMM Do dddd");
};
