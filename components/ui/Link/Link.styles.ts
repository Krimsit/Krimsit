import styled, { DefaultTheme } from "styled-components"
import Link from "next/link"

import { StylesBase, StyleType } from "./Link.interface"

const getColor = (styleType: StyleType, theme: DefaultTheme): string => {
  return styleType === "dark"
    ? theme.title
    : styleType === "primary"
    ? theme.primary
    : theme.text
}

export const Content = styled(Link)<StylesBase>`
  text-decoration: none;
  position: relative;
  margin: 0;
  font-weight: 500;
  font-size: ${({ isIcon }) => (!isIcon ? "20px" : "32px")};
  line-height: 26px;
  cursor: pointer;
  color: ${({ styleType, theme }) => getColor(styleType, theme)};
  transition: transform 0.35s;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    display: ${({ isIcon }) => (!isIcon ? "inline-block" : "none")};
    height: 1em;
    width: 100%;
    border-bottom: 1px solid
      ${({ styleType, theme }) => getColor(styleType, theme)};
    margin-top: 10px;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }

  &:hover {
    transform: ${({ isIcon }) => isIcon && "scale(1.02)"};

    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }
`
