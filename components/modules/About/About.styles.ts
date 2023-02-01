import styled from "styled-components"

import { Title as BaseTitle } from "@ui"

export const Container = styled.div`
  margin: 50px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 700px auto;
  gap: 25px;
  justify-content: space-between;
`

export const Content = styled.section`
  margin-bottom: 40px;
  width: 100%;
`

export const Title = styled(BaseTitle)`
  text-align: left;
  margin-bottom: 40px;
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.text};
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

  &:not(:first-child) {
    margin-top: 30px;
  }
`

export const TechsList = styled.ul`
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
