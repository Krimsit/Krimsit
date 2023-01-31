import { FC } from "react"

import { Link } from "@ui"
import { VscGithub } from "react-icons/vsc"
import { BsTelegram } from "react-icons/bs"

import {
  Container,
  Content,
  Logo,
  Socials,
  Navigations,
  Text
} from "./Footer.styles"

const Footer: FC = () => {
  return (
    <Container>
      <Content>
        <Logo src="/logos/logo-no-bg.png" alt="Krimsit" primary />
        <Socials>
          <Link href="" styleType="dark">
            KrimsitDjenkis@gmail.com
          </Link>
          <Link href="" styleType="dark">
            +7 (930) 222-97-25
          </Link>
          <Link href="#" styleType="dark" isIcon>
            <VscGithub />
          </Link>
          <Link href="#" styleType="dark" isIcon>
            <BsTelegram />
          </Link>
        </Socials>
      </Content>
      <Content>
        <Navigations>
          <Link href="">Главная</Link>
          <Link href="">Обо мне</Link>
          <Link href="">Проекты</Link>
          <Link href="">Контакты</Link>
        </Navigations>
        <Text>
          Разработано <span>Андреем Субботиным</span> с <span>любовью</span> &{" "}
          <span>кофе</span>.
        </Text>
      </Content>
    </Container>
  )
}

export default Footer
