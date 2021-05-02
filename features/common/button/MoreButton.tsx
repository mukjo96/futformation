import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
    value: string;
    size: "large" | "medium" | "small";
};

const MoreButton = ({ value, size = "medium" }: ButtonProps) => {
    return (
        <Button size={size}>
            <span>{value}</span>
            <span>+</span>
        </Button>
    );
};

export default MoreButton;

const Button = styled.button<{ size: string }>`
    color: white;
    background: #1c2c5b;
    border: none;
    ${(props) =>
        props.size === "large"
            ? css`
                  width: 10vw;
                  min-width: 70px;
                  max-width: 110px;
                  span {
                      font-size: 11px;
                  }
                  @media screen and (max-width: 768px) {
                      width: 30vw;
                  }
              `
            : css`
                  width: 8vw;
                  min-width: 70px;
                  max-width: 90px;
                  span {
                      font-size: 10px;
                  }
              `}

    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    margin-top: 1vw;
    cursor: pointer;
`;
