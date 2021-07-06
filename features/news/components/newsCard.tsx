import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import { renderNewsBox } from "@features/home/components/latestNews";
import NewsBanner from "@features/home/components/newsBanner";
import { newsDataTypes } from "@features/home/api/cityDataTypes";

type propTypes = {
    newsList: newsDataTypes[];
    teamId: number;
};

const NewsCard = ({ newsList, teamId }: propTypes) => {
    return (
        <Container>
            <StyledAwesomeSlider animation="cubeAnimation">
                {newsList.map((news) => (
                    <div>
                        <NewsBanner
                            news={news}
                            header="TEAM NEWS"
                            key={news.title}
                        />
                    </div>
                ))}
            </StyledAwesomeSlider>
            <Col xs={24} md={0}>
                {newsList.map((news, index) =>
                    renderNewsBox(news, index, teamId)
                )}
            </Col>
        </Container>
    );
};

export default NewsCard;

const Container = styled(Row)``;

const StyledAwesomeSlider = styled(AwesomeSlider)`
    margin: 0 3% 7% 3%;

    .awssld__controls button {
        filter: drop-shadow(0px 0px 1px white) drop-shadow(0px 0px 1px white);
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const BannerContainer = styled.div`
    display: flex;
    height: 50vw;
    max-height: 640px;
    width: 100%;
`;

const BackFilter = styled.div`
    display: flex;
    max-height: 640px;
    height: 50vw;
    align-items: flex-end;

    width: 100%;
    flex-wrap: wrap;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4) 50vw,
        rgba(0, 0, 0, 0.2) 100%
    );
`;
const BannerBackground = styled.div`
    display: flex;
    height: 50vw;
    max-height: 640px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const TextContainer = styled.div`
    padding: 5%;
    width: 47%;
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

const NewsHeader = styled.h4`
    font-size: 12px;
    color: white;
    margin: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const BannerTitle = styled.h2`
    font-size: 28px;
    color: white;
    font-weight: bold;
    margin: 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    @media screen and (max-width: 992px) {
        font-size: 24px;
    }
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;
const BannerSource = styled.p`
    font-size: 12px;
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;
