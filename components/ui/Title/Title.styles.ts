import styled from "styled-components"

export const Base = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  color: ${({ theme }) => theme.title};
  margin: 0 0 150px;

  span {
    display: block;
    margin-top: 50px;
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-size: 32px;
    line-height: 26px;
  }
`
