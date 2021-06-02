import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import MoreButton from "@features/common/button/moreButton";
import Link from "next/link";

const AdBanner = () => {
    return (
        <Container>
            <BannerRow>
                <ImageCol xs={24} md={17}>
                    <img
                        src="https://web-assets.mancity.com/dist/images/cityzens-main-background683x309.jpg"
                        width="100%"
                    />
                </ImageCol>
                <BannerCol xs={24} md={10}>
                    <BannerContainer>
                        <CityzenImage src="https://web-assets.mancity.com/dist/images/icons/cityzens.svg" />
                        <div>
                            <BannerMessage>
                                Access exclusive content, rewards and
                                competitions!
                            </BannerMessage>
                            <Link href="https://cityzens.mancity.com/">
                                <JoinButton>JOIN FOR FREE</JoinButton>
                            </Link>
                        </div>
                    </BannerContainer>
                </BannerCol>
            </BannerRow>
        </Container>
    );
};
export default AdBanner;

const Container = styled.div`
    padding: 56px;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
`;

const BannerRow = styled(Row)`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ImageCol = styled(Col)`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const BannerCol = styled(Col)`
    background: linear-gradient(270deg, #00285e 70%, rgba(0, 40, 94, 0) 91%);
    margin-left: -12.5%;

    @media screen and (max-width: 768px) {
        background: #00285e;
        margin: 0;
    }
`;

const BannerContainer = styled.div`
    display: inline-block;
    margin-left: 30%;
    padding-top: 4%;
    text-align: center;

    @media screen and (max-width: 768px) {
        padding: 0;
        display: flex;
        margin: 0;
        align-items: center;

        img {
            padding: 6vw;
        }
    }
`;

const CityzenImage = styled.img`
    padding: 28px;
    width: 50%;
`;

const BannerMessage = styled.h3`
    color: white;
`;

const JoinButton = styled.div`
    display: inline-block;
    background-color: #ffc659;
    color: #1c2c5b;
    padding: 3% 6%;
    cursor: pointer;
    margin-top: 12px;

    :hover {
        color: white;
    }
`;
