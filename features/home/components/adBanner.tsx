import React from "react";
import styled from "styled-components";
import { Row, Col, Carousel } from "antd";
import Link from "next/link";
import { useTranslation } from "next-i18next";

type propTypes = {
    teamColor: string;
};

const AdBanner = ({ teamColor }: propTypes) => {
    const { t } = useTranslation("common");

    return (
        <Carousel autoplay autoplaySpeed={7000} dotPosition="top" pauseOnHover>
            <Container>
                <BannerRow>
                    <ImageCol xs={24} md={17}>
                        <img
                            src="https://editorial.uefa.com/resources/026b-12bbaf2b1d8f-09f347a6a2ac-1000/format/wide1/italy_v_england_-_uefa_euro_2020_final.jpeg?imwidth=158 158w, https://editorial.uefa.com/resources/026b-12bbaf2b1d8f-09f347a6a2ac-1000/format/wide1/italy_v_england_-_uefa_euro_2020_final.jpeg?imwidth=276 276w, https://editorial.uefa.com/resources/026b-12bbaf2b1d8f-09f347a6a2ac-1000/format/wide1/italy_v_england_-_uefa_euro_2020_final.jpeg?imwidth=280 280w, https://editorial.uefa.com/resources/026b-12bbaf2b1d8f-09f347a6a2ac-1000/format/wide1/italy_v_england_-_uefa_euro_2020_final.jpeg?imwidth=369 369w, https://editorial.uefa.com/resources/026b-12bbaf2b1d8f-09f347a6a2ac-1000/format/wide1/italy_v_england_-_uefa_euro_2020_final.jpeg?imwidth=490 490w, https://editorial.uefa.com/resources/026b-12bbaf2b1d8f-09f347a6a2ac-1000/format/wide1/italy_v_england_-_uefa_euro_2020_final.jpeg?imwidth=556 556w, https://editorial.uefa.com/resources/026b-12bbaf2b1d8f-09f347a6a2ac-1000/format/wide1/italy_v_england_-_uefa_euro_2020_final.jpeg?imwidth=656 656w, https://editorial.uefa.com/resources/026b-12bbaf2b1d8f-09f347a6a2ac-1000/format/wide1/italy_v_england_-_uefa_euro_2020_final.jpeg?imwidth=988 988w, https://editorial.uefa.com/resources/026b-12bbaf2b1d8f-09f347a6a2ac-1000/format/wide1/italy_v_england_-_uefa_euro_2020_final.jpeg?imwidth=2048 2048w"
                            width="100%"
                        />
                    </ImageCol>
                    <BannerCol xs={24} md={10} backcolor="#0d7c91">
                        <BannerContainer>
                            <BannerMessage color="white">
                                Gianluigi Donnarumma saved two penalties as the
                                Azzurri claimed their second EURO title after a
                                tense final at Wembley.
                            </BannerMessage>
                            <Link href="https://www.uefa.com/uefaeuro-2020/news/026b-12bba5b7b7a1-5519282c3d1a-1000--spot-on-italy-win-euro-2020/">
                                <JoinButton teamcolor={teamColor}>
                                    {t("View Now")}
                                </JoinButton>
                            </Link>
                        </BannerContainer>
                    </BannerCol>
                </BannerRow>
            </Container>
            <Container>
                <BannerRow>
                    <ImageCol xs={24} md={17}>
                        <img
                            src="https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/Copia-de-Header-Thumb-Site-Copa-América-48.png"
                            width="100%"
                        />
                    </ImageCol>
                    <BannerCol xs={24} md={10} backcolor="#f7f7f7">
                        <BannerContainer>
                            <BannerMessage color="black">
                                Argentina beat Brazil at the Maracanã to win the
                                CONMEBOL Copa America
                            </BannerMessage>
                        </BannerContainer>
                    </BannerCol>
                </BannerRow>
            </Container>
        </Carousel>
    );
};
export default AdBanner;

const Container = styled.div`
    padding: 5% 20%;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
`;

const BannerRow = styled(Row)`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ImageCol = styled(Col)`
    @media screen and (max-width: 768px) {
        /* display: none; */
    }
`;
const BannerCol = styled(Col)<{ backcolor: string }>`
    background: ${(props) =>
        `linear-gradient(270deg, ${props.backcolor} 70%, rgba(0, 40, 94, 0) 91%)`};
    margin-left: -12.5%;
    align-items: center;
    padding-left: 5%;
    padding-right: 3%;
    display: flex;

    @media screen and (max-width: 768px) {
        background: ${(props) => props.backcolor};
        margin: 0;
    }
`;

const BannerContainer = styled.div`
    display: inline-block;
    margin-left: 30%;
    padding-top: 4%;
    text-align: center;

    @media screen and (max-width: 768px) {
        padding: 4% 0;
        margin: 0;
        align-items: center;

        img {
            padding: 6vw;
        }
    }
`;

const CityzenImage = styled.img`
    padding: 14px;
    width: 60%;
`;

const BannerMessage = styled.h3<{ color: string }>`
    color: ${(props) => props.color};
    font-size: 14px;
`;

const JoinButton = styled.div<{ teamcolor: string }>`
    display: inline-block;
    background-color: ${(props) => props.teamcolor};
    color: white;
    padding: 3% 6%;
    cursor: pointer;
    margin-top: 12px;

    :hover {
        color: skyblue;
    }
`;
