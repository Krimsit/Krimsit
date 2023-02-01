import styled from "styled-components"

import { Title as BaseTitle } from "@ui"

export const Container = styled.div`
  margin: 50px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 700px auto;
  gap: 25px;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    justify-content: flex-start;
  }
`

export const Content = styled.section`
  margin-bottom: 40px;
  width: 100%;
`

export const Title = styled(BaseTitle)`
  text-align: left;
  margin-bottom: 40px;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: ${({ theme }) => theme.text};

    span {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
  }
`

export const Works = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Techs = styled.div`
  justify-self: flex-end;
  padding-left: 25px;

  p {
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.title};
  }

  @media screen and (max-width: 1024px) {
    justify-self: flex-start;
    padding: 0;
  }
`

export const TechsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media screen and (max-width: 520px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`

export const TechsList = styled.ul`
  @media screen and (max-width: 1024px) {
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-size: 18px;

    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`
