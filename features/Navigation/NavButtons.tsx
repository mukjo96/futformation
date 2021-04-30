import React from "react";
import styled from "styled-components";

const NavButtons = () => {
    return <Container></Container>;
};

export default NavButtons;

const Container = styled.div`
    display: flex;
    align-items: center;
    > * {
        margin: 0 8px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 1vh;
        margin-bottom: 1vh;
    }
`;
