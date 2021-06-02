import axios from "axios";
import moment from "moment";

export async function getCityNews() {
    try {
        let response = await axios.get(
            "https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/teams?id=8456&tab=news&type=team&timezone=Asia/Seoul",
            {
                headers: {
                    "User-Agent": "ANYTHING_WILL_WORK_HERE",
                },
            }
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
            "https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/teams?id=8456&tab=fixtures&type=team&timezone=Asia/Seoul",
            {
                headers: {
                    "User-Agent": "ANYTHING_WILL_WORK_HERE",
                },
            }
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityPlayers() {
    try {
        let response = await axios.get(
            "https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/teams?id=8456&tab=squad&type=team",
            {
                headers: {
                    "User-Agent": "ANYTHING_WILL_WORK_HERE",
                },
            }
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityStats() {
    try {
        let response = await axios.get(
            "https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/teams?id=8456&tab=overview&type=team",
            {
                headers: {
                    "User-Agent": "ANYTHING_WILL_WORK_HERE",
                },
            }
        );
        return response.data.topPlayers;
    } catch (error) {
        console.log(error);
    }
}

export async function getPlayerInfo(id: number) {
    try {
        let response = await axios.get(
            `https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/playerData?id=${id}`,
            {
                headers: {
                    "User-Agent": "ANYTHING_WILL_WORK_HERE",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
