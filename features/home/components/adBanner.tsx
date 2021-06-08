import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import MoreButton from "@features/common/button/moreButton";
import Link from "next/link";

const AdBanner = ({ teamColor }) => {
    return (
        <Container>
            <BannerRow>
                <ImageCol xs={24} md={17}>
                    <img
                        src="https://www.broadcastprome.com/wp-content/uploads/2021/03/Euro-2020.jpg"
                        width="100%"
                    />
                </ImageCol>
                <BannerCol xs={24} md={10}>
                    <BannerContainer>
                        {/* <CityzenImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/UEFA_Euro_2020_logo.svg/640px-UEFA_Euro_2020_logo.svg.png" /> */}

                        <BannerMessage>
                            The new UEFA EURO 2020 schedule has been confirmed,
                            with 11 host cities staging the 51 fixtures.
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
const BannerCol = styled(Col)`
    background: linear-gradient(270deg, #0d7c91 70%, rgba(0, 40, 94, 0) 91%);
    margin-left: -12.5%;
    align-items: center;
    padding-left: 5%;
    padding-right: 3%;
    display: flex;

    @media screen and (max-width: 768px) {
        background: #0d7c91;
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

const BannerMessage = styled.h3`
    font-size: 14px;
    color: white;
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
