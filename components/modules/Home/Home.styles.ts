import styled from "styled-components"

export const Container = styled.div`
  margin: 200px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media screen and (max-width: 1024px) {
    margin: 100px 0;
  }
`
