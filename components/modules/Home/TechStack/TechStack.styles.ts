import styled from "styled-components"
import Image from "next/image"

export const Container = styled.section``

export const TechsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 120px);
  justify-content: space-between;
  gap: 60px 0;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
  }
`

export const Tech = styled(Image)`
  object-fit: contain;

  @media screen and (max-width: 1024px) {
    justify-self: center;
  }
`
