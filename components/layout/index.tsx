import { FC } from "react"

import Header from "./Header"
import Footer from "./Footer"

import { LayoutProps } from "./Layout.interface"

import { Container } from "./Layout.styles"

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
