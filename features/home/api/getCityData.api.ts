import axios from "axios";
import moment from "moment";

export async function getCityNews(teamId: number) {
    try {
        let response = await axios.get(
            `https://cors.bridged.cc/https://www.fotmob.com/teams?id=${teamId}&tab=news&type=team&timezone=Asia/Seoul`
        );
        const news = response;
        return news.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityFixtures(teamId: number) {
    try {
        let response = await axios.get(
            `https://cors.bridged.cc/https://www.fotmob.com/teams?id=${teamId}&tab=fixtures&type=team&timezone=Asia/Seoul`
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityPlayers(teamId: number) {
    try {
        let response = await axios.get(
            `https://cors.bridged.cc/https://www.fotmob.com/teams?id=${teamId}&tab=squad&type=team`
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityStats(teamId: number) {
    try {
        let response = await axios.get(
            `https://cors.bridged.cc/https://www.fotmob.com/teams?id=${teamId}&tab=overview&type=team`
        );
        return [response.data.topPlayers, response.data.tableData];
    } catch (error) {
        console.log(error);
    }
}

export async function getPlayerInfo(id: number) {
    try {
        let response = await axios.get(
            `https://cors.bridged.cc/https://www.fotmob.com/playerData?id=${id}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
