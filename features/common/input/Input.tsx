import React, { ChangeEvent } from "react";
import styled from "styled-components";

type InputProps = {
    name: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: string;
    required?: boolean;
};

const Input = ({
    name,
    placeholder,
    value,
    onChange,
    type = "text",
    required,
}: InputProps) => {
    return (
        <CustomInput
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.value)
            }
        />
    );
};

export default Input;

const CustomInput = styled.input`
    border: none;
    border-right: 0px;
    border-top: 0px;
    border-left: 0px;
    border-bottom: 0px;
    max-width: 320px;
    width: 100%;
    padding: 10px;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 10px;
    font-size: 12px;
    color: black;
    box-shadow: 5px 5px 10px #bfc2c6, -5px -5px 10px #ffffff;
`;
