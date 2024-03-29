import styled from "styled-components"
import Image from "next/image"

export const Container = styled.footer`
  width: 100%;
  margin-top: 50px;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 20px;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20px;
  }

  &:first-child {
    padding-bottom: 40px;
    border-bottom: 2px solid ${({ theme }) => theme.text};
    margin-bottom: 60px;

    @media screen and (max-width: 768px) {
      padding-bottom: 20px;
      margin-bottom: 20px;
    }
  }
`

export const Logo = styled(Image)`
  object-fit: contain;
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  gap: 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const Navigations = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.text};

  span {
    color: ${({ theme }) => theme.primary};
  }
`
