import { FC } from "react"

import { Link } from "@ui"
import { VscGithub } from "react-icons/vsc"
import { BsTelegram } from "react-icons/bs"

import { Container, Logo, Navigations, Socials } from "./Header.styles"

const Header: FC = () => {
  return (
    <Container>
      <Logo src="/logos/logo.png" alt="Krimsit" priority />
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
