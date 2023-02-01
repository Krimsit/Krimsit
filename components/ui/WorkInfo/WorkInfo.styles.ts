import styled from "styled-components"

export const Base = styled.div`
  width: 100%;
  padding-bottom: 24px;
  border-bottom: 2px solid #ebeaed;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 20px;

  &:not(:first-child) {
    margin-top: 10px;
  }
`

export const Title = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text};
`

export const AdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #a7a7a7;

  svg {
    font-size: 24px;
  }
`

export const Position = styled.div`
  padding: 0 22px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d7ffe0;
  border-radius: 100px;
  font-weight: 600;
  font-size: 9px;
  line-height: 26px;
  color: #018c0f;
`
