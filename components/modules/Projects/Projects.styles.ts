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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`
