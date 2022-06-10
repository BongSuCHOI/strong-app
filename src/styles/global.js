import { createGlobalStyle } from "styled-components";

import NotoSansKr700Woff2 from "../assets/font/noto-sans-kr-700.woff2";
import NotoSansKr700Woff from "../assets/font/noto-sans-kr-700.woff";
import NotoSansKr700Eot from "../assets/font/noto-sans-kr-700.eot";
import NotoSansKr500Woff2 from "../assets/font/noto-sans-kr-500.woff2";
import NotoSansKr500Woff from "../assets/font/noto-sans-kr-500.woff";
import NotoSansKr500Eot from "../assets/font/noto-sans-kr-500.eot";
import NotoSansKr400Woff2 from "../assets/font/noto-sans-kr-400.woff2";
import NotoSansKr400Woff from "../assets/font/noto-sans-kr-400.woff";
import NotoSansKr400Eot from "../assets/font/noto-sans-kr-400.eot";
import Roboto700Woff2 from "../assets/font/roboto-700.woff2";
import Roboto700Woff from "../assets/font/roboto-700.woff";
import Roboto700Eot from "../assets/font/roboto-700.eot";
import Roboto700Ttf from "../assets/font/roboto-700.ttf";
import Roboto400Woff2 from "../assets/font/roboto-400.woff2";
import Roboto400Woff from "../assets/font/roboto-400.woff";
import Roboto400Eot from "../assets/font/roboto-400.eot";
import Roboto400Ttf from "../assets/font/roboto-400.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        src: url(${Roboto400Eot});
        src: local(""),
            url(${Roboto400Eot}?#iefix) format("embedded-opentype"),
            url(${Roboto400Woff2}) format("woff2"),
            url(${Roboto400Woff}) format("woff"),
            url(${Roboto400Ttf}) format("truetype"),
        unicode-range: U+0041-005A, U+0061-007A;
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        src: url(${Roboto700Eot});
        src: local(""),
            url(${Roboto700Eot}?#iefix) format("embedded-opentype"),
            url(${Roboto700Woff2}) format("woff2"),
            url(${Roboto700Woff}) format("woff"),
            url(${Roboto700Ttf}) format("truetype"),
        unicode-range: U+0041-005A, U+0061-007A;
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 400;
        src: url(${NotoSansKr400Eot});
        src: local(""),
            url(${NotoSansKr400Eot}?#iefix) format("embedded-opentype"),
            url(${NotoSansKr400Woff2}) format("woff2"),
            url(${NotoSansKr400Woff}) format("woff"),
        unicode-range: U+AC00-D7A3, U+0030-0039;
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 500;
        src: url(${NotoSansKr500Eot});
        src: local(""),
            url(${NotoSansKr500Eot}?#iefix) format("embedded-opentype"),
            url(${NotoSansKr500Woff2}) format("woff2"),
            url(${NotoSansKr500Woff}) format("woff"),
        unicode-range: U+AC00-D7A3, U+0030-0039;
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 700;
        src: url(${NotoSansKr700Eot});
        src: local(""),
            url(${NotoSansKr700Eot}?#iefix) format("embedded-opentype"),
            url(${NotoSansKr700Woff2}) format("woff2"),
            url(${NotoSansKr700Woff}) format("woff"),
        unicode-range: U+AC00-D7A3, U+0030-0039;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        position: relative;
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
        letter-spacing: -0.5px;
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
