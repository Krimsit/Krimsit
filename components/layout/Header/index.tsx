import { FC } from "react"

import { Link } from "@ui"
import { VscGithub } from "react-icons/vsc"
import { BsTelegram } from "react-icons/bs"

import { Container, Logo, Navigations, Socials } from "./Header.styles"

const Header: FC = () => {
  return (
    <Container>
      <Logo
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b2b7d.appspot.com/o/logos%2Flogo.png?alt=media&token=1cc66985-a891-4e15-88ba-bdf6132dd112"
        alt="Krimsit"
      />
      <Navigations>
        <Link href="">Главная</Link>
        <Link href="">Обо мне</Link>
        <Link href="">Проекты</Link>
        <Link href="">Контакты</Link>
      </Navigations>
      <Socials>
        <Link href="#" isIcon>
          <VscGithub />
        </Link>
        <Link href="#" isIcon>
          <BsTelegram />
        </Link>
      </Socials>
    </Container>
  )
}

export default Header
