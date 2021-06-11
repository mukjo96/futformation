import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

type titleProps = {
    text: string;
    mainColor: string;
    subColor: string;
};

const PageTitle = ({ text, mainColor, subColor }: titleProps) => {
    return (
        <Fade left cascade>
            <NewsTitle mainColor={mainColor} subColor={subColor}>
                {text}
            </NewsTitle>
        </Fade>
    );
};

export default PageTitle;

const NewsTitle = styled.h1<{ mainColor: string; subColor: string }>`
    font-family: "Josefin Sans", sans-serif;
    padding: 56px 0 0 112px;
    color: ${(props) => props.mainColor};
    text-shadow: 1px 1px ${(props) => " " + props.subColor};
    text-decoration: underline;
    font-size: 36px;
    font-weight: 600;
    margin: 0;

    @media screen and (max-width: 768px) {
        padding: 28px 0 0 28px;
    }
`;
