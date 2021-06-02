import axios from "axios";
import moment from "moment";

export async function getCityNews() {
    try {
        let response = await axios.get(
            "https://cors-anywhere.herokuapp.com/https://www.fotmob.com/teams?id=8456&tab=news&type=team&timezone=Asia/Seoul"
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
            "https://cors-anywhere.herokuapp.com/https://www.fotmob.com/teams?id=8456&tab=fixtures&type=team&timezone=Asia/Seoul"
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityPlayers() {
    try {
        let response = await axios.get(
            "https://cors-anywhere.herokuapp.com/https://www.fotmob.com/teams?id=8456&tab=squad&type=team"
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityStats() {
    try {
        let response = await axios.get(
            "https://cors-anywhere.herokuapp.com/https://www.fotmob.com/teams?id=8456&tab=overview&type=team"
        );
        return response.data.topPlayers;
    } catch (error) {
        console.log(error);
    }
}

export async function getPlayerInfo(id: number) {
    try {
        let response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://www.fotmob.com/playerData?id=${id}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
