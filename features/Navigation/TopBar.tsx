import { Row, Col, Typography } from "antd";

import styled from "styled-components";

import Link from "next/link";
import React from "react";
import SearchBar from "@features/common/input/SerchBar";

const { Text } = Typography;
const AppbarContainer = styled(Row)`
    background-color: #0e1424;
`;

const LogoContainer = styled(Col)`
    height: 100px;
    display: flex;
    align-self: center;
`;
const NameContainer = styled(Col)`
    height: 100px;
    font-family: "GongGothicMedium", sans-serif;
    color: #f7f7f7;
    display: flex;
    align-items: center;
    align-self: center;
    border: solid 0.5px #222942;
    border-width: 0 0.5px 0 0;
    padding-left: 1em;
`;
const Title = styled.h3`
    font-size: 20px;
    font-family: "GongGothicMedium", sans-serif;
    color: #f7f7f7;
`;
const SubTitle = styled.h4`
    font-size: 12px;
    font-family: "GongGothicLight", sans-serif;
    color: #f7f7f7;
`;

const MenuContainer = styled(Row)`
    display: flex;
    align-items: center;
    border: solid 0.5px #222942;
    border-width: 0.5px 0.5px 0 0;
    height: 50px;
    justify-content: space-around;
`;
const SponsorContainer = styled(Row)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
`;

const MenuList = styled.li`
    margin-left: 18px;
    align-self: center;
    list-style: none;
    text-decoration: none;
`;

const MenuText = styled(Text)`
    text-decoration: none;
    font-family: "GongGothicMedium", sans-serif;
    font-size: 13px;
    color: #f7f7f7;
    &:hover {
        color: #fdba12;
        cursor: pointer;
    }
`;
const SponsorList = styled.li`
    height: 50px;
    border: solid 0.5px #222942;
    border-width: 0 0.5px 0 0.5px;
    list-style: none;
    padding: 10px;
`;
const Customul = styled.ul`
    margin-bottom: 0;
    padding: 0;
`;

const SearchbarDiv = styled.div`
    display: flex;
    @media screen and (max-width: 1280px) {
        display: none;
    }
`;
// interface SearchOptionProps {
//     value: string;
//     label: string;
// }

const TopBar = () => {
    // const classes = useStyles();

    {
        /* <ToolBarContainer>
                    <LogoContainer>
                        <Typography variant={"h6"} className={""}>
                            TEST
                        </Typography>
                    </LogoContainer>

                    <BedgeContainer>
                        <IconButton component={"span"}>
                            <IconPerson />
                        </IconButton>
                    </BedgeContainer>
                </ToolBarContainer> */
    }

    const menuList = [
        "NEWS",
        "CLUB",
        "TEAMS",
        "MATCHES",
        "TICKETS",
        "FANS",
        "SHOP",
    ];

    const sponsorList = [
        "https://www.uhfc.tv/images/footer_sponsor_05.png",
        "https://www.uhfc.tv/images/footer_sponsor_03.png",
    ];

    const renderMenu = () => {
        return menuList.map((item) => (
            <MenuList key={item} style={{}}>
                <Link href={`/${item.toLowerCase()}`}>
                    <MenuText>{item}</MenuText>
                </Link>
            </MenuList>
        ));
    };

    const renderSponsor = () => {
        return sponsorList.map((item) => (
            <SponsorList key={item}>
                <img
                    src={item}
                    style={{
                        alignSelf: "center",
                        height: "30px",
                        objectFit: "contain",
                    }}
                />
            </SponsorList>
        ));
    };

    return (
        <AppbarContainer>
            <LogoContainer span={2} offset={3}>
                <img
                    src="https://images.fotmob.com/image_resources/logo/teamlogo/133896.png"
                    style={{
                        height: "80px",
                        width: "80px",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                    }}
                />
            </LogoContainer>
            <NameContainer span={5}>
                <div>
                    <Link href="/">
                        <Title>ULSAN HYUNDAI</Title>
                    </Link>
                    <SubTitle>UNOFFICIAL SITE</SubTitle>
                </div>
            </NameContainer>
            <Col span={12}>
                <SponsorContainer>
                    <Customul style={{ color: "#f7f7f7", display: "flex" }}>
                        {renderSponsor()}
                    </Customul>
                </SponsorContainer>
                <MenuContainer>
                    <Customul
                        style={{
                            color: "#f7f7f7",
                            display: "flex",
                            marginRight: "18px",
                        }}
                    >
                        {renderMenu()}
                    </Customul>
                    <SearchbarDiv>
                        <SearchBar />
                    </SearchbarDiv>
                </MenuContainer>
            </Col>
        </AppbarContainer>
    );
};

export default TopBar;
