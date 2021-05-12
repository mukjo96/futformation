import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import styled from "styled-components";
import { getCityNews } from "@features/home/api/getCityData.api";
import Loading from "@features/common/Loading";

const { Meta } = Card;

const NewsCard = () => {
    const [newsList, setNewsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getCityNews()
            .then(async (data) => {
                if (data) {
                    setNewsList(data.news);
                }
            })
            .then((_) => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />;
    } else {
        console.log(newsList);
        return (
            <Container>
                <Row gutter={16}>
                    {newsList.map((news) => (
                        <CardCol span={6} key={news.title}>
                            <StyledCard
                                onClick={
                                    news.sourceStr.slice(0, 6) === "FotMob"
                                        ? () =>
                                              window.open(
                                                  `https://www.fotmob.com${news.page.url}`,
                                                  "_ blank"
                                              )
                                        : () =>
                                              window.open(
                                                  news.page.url,
                                                  "_ blank"
                                              )
                                }
                                hoverable
                                cover={
                                    <img
                                        style={{
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                        alt={news.title}
                                        src={news.imageUrl}
                                    />
                                }
                            >
                                <Meta
                                    title={news.title}
                                    description={news.sourceStr}
                                />
                            </StyledCard>
                        </CardCol>
                    ))}
                </Row>
            </Container>
        );
    }
};

export default NewsCard;

const Container = styled.div`
    padding: 2vw;
`;

const CardCol = styled(Col)`
    padding-top: 24px;
`;

const StyledCard = styled(Card)`
    height: 440px;

    .ant-card-meta-title {
        font-size: 14px;
        overflow: unset;
        white-space: unset;
    }
    .ant-card-meta-description {
        font-size: 10px;
    }
`;
