import {CSSObject, createGlobalStyle } from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const GlobalStyle = createGlobalStyle`
:root {
    --primaryColor: #005595;
    --textColor: #0c0636;
    --textHoverColor: #7e97f3;
    --titleFont: Arial;
    --normalFont: Helvetica;
}

* {
    margin: 0;
    padding: 0;
}

.not-found-div {
    user-select: none;
    margin-top: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff6060;
    font-size: 2.39rem;
    cursor: default;
    transition-duration: 1.4s;
    font-family: var(--titleFont);
    &:hover {
        margin-top: 2em;
        font-size: 4rem;
    }
}

.loading-div {
    user-select: none;
    margin-top: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primaryColor);
    font-size: 2.39rem;
    cursor: default;
    font-family: var(--titleFont);
    animation: textSizeUp 2s infinite linear;
}

@keyframes textSizeUp {
    0% {
        margin-top: 5em;
        font-size: 2.39rem;
    } 50% {
        margin-top: 3em;
        font-size: 4rem;
    } 100% {
        margin-top: 5em;
        font-size: 2.39rem;
    }
}

input {
    border: 0;
    outline: 0;
    border-bottom: 3px solid black;
    color: var(--textColor);
    font-family: var(--normalFont);
    font-size: 2.24rem;
    padding: 3px;
    &::placeholder {
        color: gray;
    }
}

@media screen and (max-width: 800px){
    input {
        font-size: 1.5rem;
    }
}
`


export default GlobalStyle;