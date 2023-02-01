import { FC, useEffect, useState } from "react"

import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

import { LayoutProps } from "./Layout.interface"

import { Container } from "./Layout.styles"

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const menuReducer = {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  return (
    <>
      <Container>
        <Header onOpen={menuReducer.open} />
        <main>{children}</main>
        <Footer />
      </Container>
      <Sidebar isOpen={isOpen} onClose={menuReducer.close} />
    </>
  )
}

export default Layout
