import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

type ButtonProps = {
    value: string;
    onClick: () => void;
    icon?: string;
    type?: "button" | "submit" | "reset";
};

const Button = ({ value, onClick, icon, type }: ButtonProps) => {
    if (icon === "google") {
        return (
            <CustomButton onClick={onClick} icon={icon}>
                <FontAwesomeIcon
                    style={{ marginRight: "8px" }}
                    icon={faGoogle}
                    width="14px"
                />
                <Value>{value}</Value>
            </CustomButton>
        );
    } else if (icon === "github") {
        return (
            <CustomButton onClick={onClick} icon={icon}>
                <FontAwesomeIcon
                    style={{ marginRight: "8px" }}
                    icon={faGithub}
                    width="14px"
                />
                <Value>{value}</Value>
            </CustomButton>
        );
    }
    return (
        <CustomButton onClick={onClick} type={type}>
            {value}
        </CustomButton>
    );
};

const CustomButton = styled.button<{ icon?: string }>`
    border: none;
    max-width: 320px;
    width: 100%;
    padding: 10px;
    border-radius: 30px;
    margin-bottom: 10px;
    font-size: 12px;
    text-align: center;
    background: ${(props) => (props.icon ? "white" : "#04aaff")};
    color: ${(props) => (props.icon ? "black" : "white")};
    margin-top: 10px;
    cursor: pointer;
    box-shadow: 5px 5px 10px #bfc2c6, -5px -5px 10px #ffffff;
`;

const Value = styled.span``;

export default Button;
