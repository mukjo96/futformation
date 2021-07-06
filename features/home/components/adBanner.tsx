import React from "react";
import styled from "styled-components";
import { Row, Col, Carousel } from "antd";
import Link from "next/link";

type propTypes = {
    teamColor: string;
};

const AdBanner = ({ teamColor }: propTypes) => {
    return (
        <Carousel autoplay autoplaySpeed={7000} dotPosition="top" pauseOnHover>
            <Container>
                <BannerRow>
                    <ImageCol xs={24} md={17}>
                        <img
                            src="https://www.broadcastprome.com/wp-content/uploads/2021/03/Euro-2020.jpg"
                            width="100%"
                        />
                    </ImageCol>
                    <BannerCol xs={24} md={10} backcolor="#0d7c91">
                        <BannerContainer>
                            <BannerMessage color="white">
                                The new UEFA EURO 2020 schedule has been
                                confirmed, with 11 host cities staging the 51
                                fixtures.
                            </BannerMessage>
                            <Link href="https://editorial.uefa.com/resources/026a-126a09addc81-6f092f1f9f89-1000/euro2021_match_schedule_-_english_-_310521_20210601103927.pdf">
                                <JoinButton teamcolor={teamColor}>
                                    Download full fixture list
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
                            src="https://i1.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/ca-grupos.jpg"
                            width="100%"
                        />
                    </ImageCol>
                    <BannerCol xs={24} md={10} backcolor="#f7f7f7">
                        <BannerContainer>
                            <BannerMessage color="black">
                                READY FOR KICKOFF! Fixtures for the 2021
                                CONMEBOL Copa America have all been confirmed
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
