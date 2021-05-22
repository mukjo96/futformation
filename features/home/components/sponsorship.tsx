import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import BlockTitle from "./Title/blockTitle";
import Link from "next/link";

const Sponsorship = () => {
    return (
        <Container>
            <BlockTitle title="SPONSORSHIP" link="sponsorship" />
            <Row>
                <ImageCol xs={8} md={4}>
                    <Link href={"https://www.etihad.com"}>
                        <a target="_blank">
                            <img
                                src={
                                    "https://seekvectorlogo.com/wp-content/uploads/2018/05/etihad-airways-vector-logo.png"
                                }
                                alt="Etihad Airways"
                                width="100%"
                            />
                        </a>
                    </Link>
                </ImageCol>
                <ImageCol xs={8} md={4}>
                    <Link href={"https://puma.com"}>
                        <a target="_blank">
                            <img
                                src={
                                    "https://www.freepnglogos.com/uploads/puma-logo-png-1.png"
                                }
                                alt="Puma"
                                width="100%"
                            />
                        </a>
                    </Link>
                </ImageCol>
                <ImageCol xs={8} md={4}>
                    <Link href="https://www.etisalat.ae">
                        <a target="_blank">
                            <img
                                src={
                                    "https://cdn.freelogovectors.net/wp-content/uploads/2018/03/etisalat-logo01.png"
                                }
                                alt="Etisalat"
                                width="100%"
                            />
                        </a>
                    </Link>
                </ImageCol>

                <ImageCol xs={8} md={4}>
                    <Link href="http://www.nexentire.com/">
                        <a target="_blank">
                            <img
                                src={
                                    "https://seekvectorlogo.com/wp-content/uploads/2018/03/nexen-tire-vector-logo.png"
                                }
                                alt="Nexen Tire"
                                width="100%"
                            />
                        </a>
                    </Link>
                </ImageCol>
                <ImageCol xs={8} md={4}>
                    <Link href="http://www2.nissan.co.jp/BRAND/?sclisid=LS_TIJ_99_GO_GLIS_00255174">
                        <a target="_blank">
                            <img
                                src={
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nissan_2020_logo.svg/1024px-Nissan_2020_logo.svg.png"
                                }
                                alt="NISSAN"
                                width="100%"
                            />
                        </a>
                    </Link>
                </ImageCol>
                <ImageCol xs={8} md={4}>
                    <Link href="https://visitabudhabi.ae">
                        <a target="_blank">
                            <img
                                src={
                                    "https://iconape.com/wp-content/png_logo_vector/abu-dhabi-logo.png"
                                }
                                alt="Abudhabi"
                                width="100%"
                            />
                        </a>
                    </Link>
                </ImageCol>
            </Row>
        </Container>
    );
};

export default Sponsorship;

const Container = styled.div`
    padding: 28px;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
`;

const ImageCol = styled(Col)`
    background-size: contain;
    background-repeat: no-repeat;
    align-self: center;

    padding: 33px;
    @media screen and (max-width: 768px) {
        border-right: none;
        padding: 5vw;
    }
`;
