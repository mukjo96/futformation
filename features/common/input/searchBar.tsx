import styled from "styled-components";

import React, { useState } from "react";

const StyledContainer = styled.div`
    width: 150px;
    height: 30px;
    position: relative;

    input {
        outline: none;
        background-color: #f7f7f7;
        border: none;
        border-radius: 50px;
        padding: 0 13px;
        font-size: 13px;
        height: 30px;
        width: 0px;
        box-sizing: border-box;
        transition: all 0.7s ease-in-out;
        position: absolute;
        top: 0;
        right: 0;
    }
    input.focused {
        width: 100%;
    }
    ::-webkit-input-placeholder {
        color: #d071a0;
    }
    ::-moz-input-placeholder {
        color: #d071a0;
    }
    ::-ms-input-placeholder {
        color: #d071a0;
    }
    ::-o-input-placeholder {
        color: #d071a0;
    }
    ::input-placeholder {
        color: #d071a0;
    }

    #search-button {
        position: absolute;
        background: #f7f7f7;
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        font-size: 13px;
        top: 0;
        right: 0;
        outline: none;
        color: #cc3a81;
        transition: all 0.5s ease;
    }
`;

const Searchbar = () => {
    const [focus, setFocus] = useState(true);
    const [text, setText] = useState("");

    const onFocus = () => {
        setFocus(!focus);
    };

    return (
        <StyledContainer>
            <form
                onSubmit={() => {
                    window.open(
                        `https://www.fotmob.com/search?q=${text}`,
                        "_blank"
                    );
                    setText("");
                }}
            >
                <input
                    type="text"
                    className={focus ? "focused" : ""}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    placeholder="Search"
                />
            </form>
            <button
                onClick={onFocus}
                id="search-button"
                className={focus ? "active" : ""}
            >
                🔍
            </button>
        </StyledContainer>
    );
};

export default Searchbar;
