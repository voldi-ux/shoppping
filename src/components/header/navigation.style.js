import style, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = style.div`
height: 70px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 25px;


`;

export const LogoContainer = style(Link)`
padding: 10px;
`;

export const OptionsContainer = style.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;


export const OptionsStyles = css`
display: inline-block;
padding: 10px 15px;
font-size: 18px;
color:#000;
text-decoration: none;
user-select: none;
cursor: pointer;
`

export const OptionLink = style(Link)`
  ${OptionsStyles}
`

export const OptionSpan = style.span`
${OptionsStyles};
font-size: 18px;
text-transform: uppercase;
`