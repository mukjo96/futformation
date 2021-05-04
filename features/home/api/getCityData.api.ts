import axios from "axios";
import moment from "moment";

export async function getCityNews() {
    try {
        let response = await axios.get(
            "https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/teams?id=8456&tab=news&type=team&timezone=Asia/Seoul"
        );
        const news = response;
        return news.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityFixtures() {
    try {
        let response = await axios.get(
            "https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/teams?id=8456&tab=fixtures&type=team&timezone=Asia/Seoul"
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityPlayers() {
    try {
        let response = await axios.get(
            "https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/teams?id=8456&tab=squad&type=team"
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityStats() {
    try {
        let response = await axios.get(
            "https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/teams?id=8456&tab=overview&type=team"
        );
        return response.data.topPlayers;
    } catch (error) {
        console.log(error);
    }
}

export async function getPlayerInfo(id: number) {
    try {
        let response = await axios.get(
            `https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/playerData?id=${id}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getLastWeekendBoxOffice() {
    try {
        let response = await axios.get(
            `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=373ddebd31b0a8811467c7be470256b2&targetDt=${moment()
                .subtract(7, "d")
                .format("YYYYMMDD")}`
        );
        const movies = response.data.boxOfficeResult.weeklyBoxOfficeList;
        return movies;
    } catch (error) {
        console.log(error);
    }
}
