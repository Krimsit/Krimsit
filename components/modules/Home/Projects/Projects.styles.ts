import styled from "styled-components"

export const Container = styled.section``

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 26px;
  color: ${({ theme }) => theme.title};
  margin-bottom: 150px;
`

export const ProjectsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 45px;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`
