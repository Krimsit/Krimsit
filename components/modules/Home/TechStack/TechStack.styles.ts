import styled from "styled-components"
import Image from "next/image"

export const Container = styled.section`
  margin-bottom: 200px;
`

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 26px;
  color: ${({ theme }) => theme.title};
  margin-bottom: 150px;

  span {
    display: block;
    margin-top: 50px;
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-size: 32px;
    line-height: 26px;
  }
`

export const TechsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 120px);
  justify-content: space-between;
  gap: 60px 0;
`

export const Tech = styled(Image).attrs(() => ({
  width: 120,
  height: 120
}))`
  object-fit: contain;
`
