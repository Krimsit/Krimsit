import styled from "styled-components"

export const Container = styled.div`
  max-width: 1160px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  background-color: transparent;

  @media screen and (max-width: 1024px) {
    max-width: calc(100% - 40px);
  }
`
