import styled from "styled-components"
import Image from "next/image"

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0 40px;
  margin: 150px 0 400px;
`

export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  color: ${({ theme }) => theme.title};

  span {
    color: ${({ theme }) => theme.primary};
  }
`

export const Avatar = styled(Image).attrs(() => ({
  width: 350,
  height: 350
}))`
  min-width: 350px;
  object-fit: cover;
  border-radius: 100%;
  border: 5px solid ${({ theme }) => theme.primary};
`
