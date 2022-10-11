import styled from 'styled-components'


export const DefaultButton = styled.button<{margin?: boolean}>`
    padding: 18px 32px;
    border-radius: 10px;
    background-color: #302cff;
    box-shadow: 0 2px 8px 0 rgba(48, 44, 255, 0.1);
    transition: box-shadow 350ms ease, background-color 350ms ease, -webkit-transform 350ms ease;
    transition: transform 350ms ease, box-shadow 350ms ease, background-color 350ms ease;
    transition: transform 350ms ease, box-shadow 350ms ease, background-color 350ms ease, -webkit-transform 350ms ease;
    color: #fff;
    line-height: 1em;
    font-weight: 500;
    text-align: center;
    font-family: "Plus Jakarta Display", sans-serif;
    border-width: 0px;
    &:hover {
        box-shadow: 0px 1px 12px 2px rgba(21, 0, 255, 0.396);
        transform: scale(0.95);
        color: #fff;
    }
    &:focus {
        outline: none;
    }
    &:active {
        transform: scale(0.999);
    }
`
