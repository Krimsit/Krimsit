import styled from "styled-components"

import { Title as BaseTitle } from "@ui"

export const Container = styled.div`
  margin: 50px 0 100px;
  width: 100%;
`

export const Title = styled(BaseTitle)`
  text-align: left;
  margin-bottom: 70px;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 45px;
  justify-content: space-between;
`
