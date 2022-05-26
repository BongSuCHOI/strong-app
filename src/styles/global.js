import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* roboto-regular - latin */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        src: url("../assets/font/roboto-v30-latin-regular.eot");
        src: local(""),
            url("../assets/font/roboto-v30-latin-regular.eot?#iefix") format("embedded-opentype"),
            url("../assets/font/roboto-v30-latin-regular.woff2") format("woff2"),
            url("../assets/font/roboto-v30-latin-regular.woff") format("woff"),
            url("../assets/font/roboto-v30-latin-regular.svg#Roboto") format("svg");
        unicode-range: U+0041-005A, U+0061-007A;
    }
    /* roboto-700 - latin */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        src: url("../assets/font/roboto-v30-latin-700.eot");
        src: local(""), url("../assets/font/roboto-v30-latin-700.eot?#iefix") format("embedded-opentype"),
            url("../assets/font/roboto-v30-latin-700.woff2") format("woff2"),
            url("../assets/font/roboto-v30-latin-700.woff") format("woff"),
            url("../assets/font/roboto-v30-latin-700.svg#Roboto") format("svg");
        unicode-range: U+0041-005A, U+0061-007A;
    }

    /* noto-sans-kr-regular */
    @font-face {
        font-display: swap;
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 400;
        src: url("../assets/font/noto-sans-kr-400.eot");
        src: local(""), url("../assets/font/noto-sans-kr-400.eot?#iefix") format("embedded-opentype"),
            url("../assets/font/noto-sans-kr-400.woff2") format("woff2"),
            url("../assets/font/noto-sans-kr-400.woff") format("woff"),
            url("../assets/font/noto-sans-kr-400.svg#NotoSansKR") format("svg");
        unicode-range: U+AC00-D7A3, U+0030-0039;
    }

    /* noto-sans-kr-medium */
    @font-face {
        font-display: swap;
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 500;
        src: url("../assets/font/noto-sans-kr-500.eot");
        src: local(""), url("../assets/font/noto-sans-kr-500.eot?#iefix") format("embedded-opentype"),
            url("../assets/font/noto-sans-kr-500.woff2") format("woff2"),
            url("../assets/font/noto-sans-kr-500.woff") format("woff"),
            url("../assets/font/noto-sans-kr-500.svg#NotoSansKR") format("svg");
        unicode-range: U+AC00-D7A3, U+0030-0039;
    }

    /* noto-sans-kr-bold */
    @font-face {
        font-display: swap;
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 700;
        src: url("../assets/font/noto-sans-kr-700.eot");
        src: local(""), url("../assets/font/noto-sans-kr-700.eot?#iefix") format("embedded-opentype"),
            url("../assets/font/noto-sans-kr-700.woff2") format("woff2"),
            url("../assets/font/noto-sans-kr-700.woff") format("woff"),
            url("../assets/font/noto-sans-kr-700.svg#NotoSansKR") format("svg");
        unicode-range: U+AC00-D7A3, U+0030-0039;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        background-color: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body,
    th,
    td,
    input,
    select,
    textarea,
    button {
        font-family: "Noto Sans KR", "Roboto", sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #000;
        line-height: 1;
        letter-spacing: -1px;
    }
    fieldset,
    img {
        border: 0;
    }
    dl,
    ul,
    ol,
    menu,
    li {
        list-style: none;
    }
    input,
    select,
    textarea,
    button {
        vertical-align: middle;
        outline: none;
    }
    button {
        cursor: pointer;
        border: none;
        background: none;
        outline: none;
    }
    a {
        color: #000;
        text-decoration: none;
    }
    address,
    caption,
    cite,
    code,
    dfn,
    em,
    var {
        font-style: normal;
        font-weight: normal;
    }
    input[type="button"] {
        appearance: none;
    }
    select::-ms-expand {
        display: none;
    }
    textarea {
        resize: none;
    }
    body {
        position: relative;
    }
    table {
        padding: 0;
        border: 0;
        border-spacing: 0px;
        border-collapse: collapse;
    }
    input,
    textarea,
    select {
        border-radius: 0;
        -webkit-appearance: none;
    }
`;

export default GlobalStyle;
