import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

type titleProps = {
    text: string;
};

const PageTitle = ({ text }: titleProps) => {
    return (
        <Fade left cascade>
            <NewsTitle>{text}</NewsTitle>
        </Fade>
    );
};

export default PageTitle;

const NewsTitle = styled.h1`
    font-family: "Josefin Sans", sans-serif;
    padding: 56px 0 0 112px;
    color: #6cabdd;
    text-shadow: 1px 1px #1c2c5b;

    text-decoration: underline;
    font-size: 36px;
    font-weight: 600;
    margin: 0;
`;
