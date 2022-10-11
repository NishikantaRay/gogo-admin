import React from 'react';
import styled from "styled-components";


export const Select = styled.select`
    height: 42px;
    padding: 10px;
    margin-right: 5px;
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

type Props = {
    set: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    options: string[];
    label: string;
    styles?: React.CSSProperties;
}

export const DefaultSelect: React.FC<Props> = ({ set, value, options, label, styles }) => {

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        set(event.target.value as string);
    };

    return (
            <Select value={value} onChange={handleChange} style={styles}>
                <option style={{width: '100%'}}>{label}</option>
                {options.map((item, key) => <option style={{width: '100%'}} key={key} value={item}>{item}</option>)}
            </Select>
    );
}