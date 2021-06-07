import React from "react";
import { Card, Avatar } from "antd";
import Carousel from "react-simply-carousel";
import styled from "styled-components";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { IconLogo } from "@features/common/logo/Logo";
import Link from "antd/lib/typography/Link";

const { Meta } = Card;

const NewsCard = ({ newsList, activeSlide, setActiveSlide, teamId }) => {
    return (
        <Container>
            <Carousel
                updateOnItemClick
                centerMode
                containerProps={{
                    style: {
                        justifyContent: "space-between",
                        height: 500,
                    },
                }}
                activeSlideIndex={activeSlide}
                activeSlideProps={{
                    style: {
                        zIndex: 1,
                        fontSize: 20,
                        fontWeight: "bold",
                        filter: "none",
                        boxShadow:
                            "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                    },
                }}
                onRequestChange={setActiveSlide}
                forwardBtnProps={{
                    children: <RightOutlined />,
                    style: {
                        width: 60,
                        height: 60,
                        minWidth: 40,
                        background: "white",
                        border: "none",
                        alignSelf: "center",
                    },
                }}
                backwardBtnProps={{
                    children: <LeftOutlined />,
                    style: {
                        width: 60,
                        height: 60,
                        minWidth: 40,
                        background: "white",
                        border: "none",
                        alignSelf: "center",
                    },
                }}
                itemsToShow={3}
                speed={400}
                easing="ease-in-out"
            >
                {newsList.map((news, index) => (
                    <NewsContainer
                        style={{
                            justifyContent: "center",

                            marginLeft: "5px",
                            marginRight: "5px",

                            textAlign: "center",
                            boxSizing: "border-box",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "10px",
                            textDecoration: "none",
                            alignSelf: "center",
                        }}
                        key={news.title}
                    >
                        <StyledCard
                            hoverable
                            cover={
                                <img
                                    style={{
                                        height: "250px",
                                        objectFit: "cover",
                                    }}
                                    alt={news.title}
                                    src={news.imageUrl}
                                />
                            }
                        >
                            <Meta
                                avatar={index + 1}
                                title={
                                    <Link
                                        href={
                                            news.sourceStr.slice(0, 6) ===
                                            "FotMob"
                                                ? `https://www.fotmob.com${news.page.url}`
                                                : news.page.url
                                        }
                                        target="_blank"
                                    >
                                        {news.title}
                                    </Link>
                                }
                                description={
                                    <>
                                        <Avatar
                                            size="small"
                                            icon={
                                                news.sourceIconUrl ===
                                                "https://images.fotmob.com/image_resources/news/default.png" ? (
                                                    <img
                                                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${teamId}_small.png`}
                                                    />
                                                ) : (
                                                    <img
                                                        src={news.sourceIconUrl}
                                                    />
                                                )
                                            }
                                            style={{
                                                marginRight: "4px",
                                                background: "white",
                                            }}
                                        />
                                        <span>{news.sourceStr}</span>
                                    </>
                                }
                            />
                        </StyledCard>
                    </NewsContainer>
                ))}
            </Carousel>
        </Container>
    );
};

export default NewsCard;

const Container = styled.div`
    padding: 28px;
`;

const NewsContainer = styled.div`
    width: 350px;
    height: 440px;

    @media screen and (max-width: 768px) {
        width: 250px;
    }
`;
const StyledCard = styled(Card)`
    height: 440px;

    .ant-card-meta-title {
        font-size: 14px;
        overflow: unset;
        white-space: unset;

        a {
            color: black;
            :hover {
                color: #6cabdd;
            }
        }
    }
    .ant-card-meta-description {
        font-size: 10px;
    }
`;
