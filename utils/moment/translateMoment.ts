import moment from "moment";
import "moment/locale/ko";
import { TFunction } from "next-i18next";

export const translateLongDateToKorean = (dateString: string) => {
    let date = moment(dateString);
    return date.format("YYYY년 MMMM Do dddd");
};

export const translateShortDateToKorean = (dateString: string) => {
    let date = moment(dateString);
    return date.format("MMMM Do dddd");
};

export function translateLate(late: string, t: TFunction) {
    let newLate = late;
    late.includes("1 month ago") &&
        (newLate = newLate.replace("1 month ago", t("1 month ago")));
    late.includes("months ago") &&
        (newLate = newLate.replace(" months ago", t("months ago")));
    late.includes("1 day ago") &&
        (newLate = newLate.replace("1 day ago", t("1 day ago")));
    late.includes("days ago") &&
        (newLate = newLate.replace(" days ago", t("days ago")));
    late.includes("hour ago") &&
        (newLate = newLate.replace(" hour ago", t("hour ago")));
    late.includes("hours ago") &&
        (newLate = newLate.replace(" hours ago", t("hours ago")));
    late.includes("minutes ago") &&
        (newLate = newLate.replace(" minutes ago", t("minutes ago")));
    late.includes("about") && (newLate = newLate.replace("about ", ""));

    return newLate;
}
