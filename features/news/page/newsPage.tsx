import Loading from "@features/common/Loading";
import { PageTitle } from "@features/common/Text/pageTitle";
import { getCityNews } from "@features/home/api/getCityData.api";
import React, { Fragment, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import NewsCard from "../components/newsCard";

const NewsPage = () => {
    const [activeNews, setActiveNews] = useState(0);
    const [newsList, setNewsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getCityNews()
            .then((data) => {
                setNewsList(data.news);
            })
            .then((_) => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />;
    } else {
        return (
            <Fragment>
                <PageTitle text="CITY NEWS" />
                <NewsCard
                    newsList={newsList}
                    activeSlide={activeNews}
                    setActiveSlide={setActiveNews}
                />
            </Fragment>
        );
    }
};

export default NewsPage;
