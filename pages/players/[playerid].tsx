import React from "react";
import styled from "styled-components";

const PlayerInfo = () => {
    return <Page></Page>;
};

export default PlayerInfo;

const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;
