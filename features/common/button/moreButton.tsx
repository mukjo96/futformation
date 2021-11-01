import { useTranslation } from "next-i18next";
import React from "react";
import { useSelector } from "react-redux";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import { RootStateInterface } from "redux/interfaces/ifRootState";
import styled, { css } from "styled-components";

type ButtonProps = {
    value: string;
    size: "large" | "medium" | "small";
    onClick?: React.MouseEventHandler;
};

const MoreButton = ({ value, size = "medium", onClick }: ButtonProps) => {
    const { t } = useTranslation("common");
    const team = useSelector(
        (state: RootStateInterface): IExampleState => state.rdcExample
    );
    return (
        <Button size={size} teamcolor={team.teamColor} onClick={onClick}>
            <span>{t(value)}</span>
            <span>+</span>
        </Button>
    );
};

export default MoreButton;

const Button = styled.button<{ size: string; teamcolor: string }>`
    color: white;
    /* background: #1c2c5b; */
    background: ${(props) => (props.teamcolor ? props.teamcolor : "#1c2c5b")};
    border: none;
    ${(props) =>
        props.size === "large"
            ? css`
                  width: 112px;
                  min-width: 70px;
                  max-width: 110px;
                  span {
                      font-size: 11px;
                  }
                  @media screen and (max-width: 768px) {
                      width: 24vw;
                  }
              `
            : css`
                  width: 88px;
                  min-width: 70px;
                  max-width: 90px;
                  span {
                      font-size: 10px;
                  }
              `}

    padding: 5px 10px;
    display: flex;
    justify-content: space-between;

    cursor: pointer;
`;
