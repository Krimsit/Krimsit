import styled from "styled-components"

export const Base = styled.div`
  width: 100%;
  padding-bottom: 24px;
  border-bottom: 2px solid #ebeaed;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 26px;
  margin: 0 0 17px;
  color: ${({ theme }) => theme.text};
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.title};

  span {
    font-weight: bold;
  }
`
