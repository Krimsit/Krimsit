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
        <Logo
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-b2b7d.appspot.com/o/logos%2Flogo_no_bg.png?alt=media&token=42f93676-7f03-4000-a5db-0896a7519743"
          alt="Krimsit"
        />
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
