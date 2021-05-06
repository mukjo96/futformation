import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import MoreButton from "@features/common/button/MoreButton";
import Link from "next/link";

const AdBanner = () => {
    return (
        <Container>
            <BannerRow>
                <Col span={17}>
                    <img
                        src="https://web-assets.mancity.com/dist/images/cityzens-main-background683x309.jpg"
                        width="100%"
                    />
                </Col>
                <BannerCol span={10}>
                    <BannerContainer>
                        <CityzenImage src="https://web-assets.mancity.com/dist/images/icons/cityzens.svg" />
                        <BannerMessage>
                            Access exclusive content, rewards and competitions!
                        </BannerMessage>
                        <Link href="https://cityzens.mancity.com/">
                            <JoinButton>JOIN FOR FREE</JoinButton>
                        </Link>
                    </BannerContainer>
                </BannerCol>
            </BannerRow>
        </Container>
    );
};
export default AdBanner;

const Container = styled.div`
    padding: 4vw;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
`;

const BannerRow = styled(Row)`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const BannerCol = styled(Col)`
    background: linear-gradient(270deg, #00285e 70%, rgba(0, 40, 94, 0) 91%);
    margin-left: -12.5%;
`;

const BannerContainer = styled.div`
    margin-left: 30%;
    padding-top: 4%;
    text-align: center;
`;

const CityzenImage = styled.img`
    padding: 2vw;
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
`;
