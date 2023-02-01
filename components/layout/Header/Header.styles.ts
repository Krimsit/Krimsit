import styled from "styled-components"
import Image from "next/image"

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0 20px;
  padding-top: 40px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`

export const Logo = styled(Image)`
  object-fit: cover;
`

export const Navigations = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  flex: 1;

  @media screen and (max-width: 768px) {
    gap: 15px;
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
