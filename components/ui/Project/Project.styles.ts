import styled from "styled-components"
import { StylesImageContainer } from "@ui/Project/Project.interface"

export const Base = styled.div`
  width: 100%;
  height: 550px;
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: ${({ theme }) => theme.background};
`

export const ImageContainer = styled.div<StylesImageContainer>`
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 20px 20px 0 0;
    object-fit: ${({ noImage }) => (!noImage ? "cover" : "contain")};
  }
`

export const Content = styled.div`
  padding: 25px;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 26px;
  margin: 0 0 17px;
  color: ${({ theme }) => theme.text};
`

export const Description = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.text};
`

export const Techs = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.title};

  span {
    font-weight: bold;
  }
`
