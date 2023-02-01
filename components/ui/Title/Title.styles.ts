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
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 50px;

    span {
      font-size: 24px;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 520px) {
    font-size: 32px;
    margin-bottom: 44px;

    span {
      font-size: 24px;
    }
  }
`
