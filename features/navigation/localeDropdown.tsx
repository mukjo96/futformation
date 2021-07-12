import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LocaleDropdown = () => {
    const { i18n } = useTranslation();

    const menu = (
        <Menu>
            <StyledItem key="0">
                <Link href="#" locale="kr">
                    한국어
                </Link>
            </StyledItem>
            <StyledItem key="1">
                <Link href="#" locale="en">
                    English
                </Link>
            </StyledItem>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={["click"]}>
            <DropdownLink
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
            >
                {i18n.language.toUpperCase()} <DownOutlined />
            </DropdownLink>
        </Dropdown>
    );
};

export default LocaleDropdown;

const StyledItem = styled(Menu.Item)`
    a {
        color: black;
        text-decoration: none;
    }
`;

const DropdownLink = styled.a`
    color: white;
    text-decoration: none;
    :hover {
        color: white;
        text-decoration: underline;
    }
`;
