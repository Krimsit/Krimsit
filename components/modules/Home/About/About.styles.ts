import styled from "styled-components"
import Image from "next/image"

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-bottom: 200px;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    margin-bottom: 0;
  }
`

export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  color: ${({ theme }) => theme.title};
  margin: 0;

  span {
    color: ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 46px;
    line-height: 58px;
  }

  @media screen and (max-width: 520px) {
    font-size: 38px;
    line-height: 50px;
  }
`

export const Avatar = styled(Image)`
  min-width: 350px;
  object-fit: cover;
  border-radius: 100%;
  border: 5px solid ${({ theme }) => theme.primary};

  @media screen and (max-width: 768px) {
    min-width: 300px;
  }
`
