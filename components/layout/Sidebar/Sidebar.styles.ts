import styled from "styled-components"

import { MdClose } from "react-icons/md"

import { StylesBase } from "./Sidebar.interface"

export const Base = styled.aside<StylesBase>`
  position: absolute;
  top: 0;
  transform: translateX(${({ isOpen }) => (!isOpen ? "100%" : "0")});
  max-width: 100%;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  z-index: 5;
  padding: 20px;
  transition: transform 0.3s ease;
`

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`

export const Close = styled(MdClose)`
  font-size: 32px;
  color: ${({ theme }) => theme.text};
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
