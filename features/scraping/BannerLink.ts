import axios from "axios";
import cheerio from "cheerio";

const getHtml = async () => {
    try {
        return await axios.get(
            "https://cors-anywhere.herokuapp.com/https://www.fotmob.com/teams?id=8456&tab=overview&type=team"
        );
    } catch (error) {
        console.error(error);
    }
};

export const getBannerLink = async () => {
    getHtml()
        .then((html) => {
            console.log(html);
            /* let ulList = [];
            const $ = cheerio.load(html.data);
            const $bodyList = $("div.flexslider ul").children("li");

            $bodyList.each(function (i, elem) {
                ulList[i] = {
                    image_url: $(this).find("a div.img img").attr("src"),
                    title: $(this).find("a div.txt h3").text(),
                };
            });

            return ulList; */
        })
        .then((res) => console.log(res));
};
