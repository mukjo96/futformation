import axios from "axios";
import moment from 'moment';

export async function getTodayBoxOffice() {
  try {
    let response = await axios.get(
      `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=373ddebd31b0a8811467c7be470256b2&targetDt=${moment().subtract(1, 'd').format('YYYYMMDD')}`
    );
    const movies = response.data.boxOfficeResult.dailyBoxOfficeList;
    return movies;
  } catch (error) {
    console.log(error);
  }
}

export async function getLastWeekendBoxOffice() {
  try {
    let response = await axios.get(
      `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=373ddebd31b0a8811467c7be470256b2&targetDt=${moment().subtract(7, 'd').format('YYYYMMDD')}`
    );
    const movies = response.data.boxOfficeResult.weeklyBoxOfficeList;
    return movies;
  } catch (error) {
    console.log(error);
  }
}


