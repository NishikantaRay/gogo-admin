import styled from "styled-components";

type variant = 'small' | 'default' 

export const InputField = styled.input<{ variant?: variant, margin?: boolean }>`
    height: ${(props) => (props.variant==='small' ? "42px":"62px")};
    margin-bottom: ${(props) => (props.margin? "10px":"0px")};
    padding: 0px 20px;
    border-style: solid;
    border-width: 1px;
    border-color: #f6f6fb;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(17, 10, 99, 0.07), 0 12px 22px 0 rgba(128, 118, 247, 0.07);
    transition: border-color 350ms ease, color 350ms ease;
    color: #070721;
    font-size: 16px;
    font-family: "Plus Jakarta Display", sans-serif;
    &:focus {
        box-shadow: 0 8px 16px 0 rgba(17, 10, 99, 0.2);
        outline-style: none;
    }
`

export const Textarea = styled.textarea<{ variant?: variant, margin?: boolean }>`
    height: ${(props) => (props.variant==='small' ? "42px":"62px")};
    margin-bottom: ${(props) => (props.margin? "10px":"0px")};
    padding: 10px 20px;
    border-style: solid;
    border-width: 1px;
    border-color: #f6f6fb;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(17, 10, 99, 0.07), 0 12px 22px 0 rgba(128, 118, 247, 0.07);
    transition: border-color 350ms ease, color 350ms ease;
    color: #070721;
    font-size: 16px;
    font-family: "Plus Jakarta Display", sans-serif;
    &:focus {
        box-shadow: 0 8px 16px 0 rgba(17, 10, 99, 0.2);
        outline-style: none;
    }
`

export const DateTimeSelector = styled.input<{ variant?: variant, margin?: boolean }>`
    height: ${(props) => (props.variant==='small' ? "42px":"62px")};
    margin-bottom: ${(props) => (props.margin? "10px":"0px")};
    padding: 10px 20px;
    border-style: solid;
    border-width: 1px;
    border-color: #f6f6fb;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(17, 10, 99, 0.07), 0 12px 22px 0 rgba(128, 118, 247, 0.07);
    transition: border-color 350ms ease, color 350ms ease;
    color: #070721;
    font-size: 16px;
    font-family: "Plus Jakarta Display", sans-serif;
    &:focus {
        box-shadow: 0 8px 16px 0 rgba(17, 10, 99, 0.2);
        outline-style: none;
    }
`

