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

import { navigations, socials, copyright, logos } from "../constants"

const Footer: FC = () => {
  return (
    <Container>
      <Content>
        <Logo src={logos.noBg} alt="Krimsit" priority />
        <Socials>
          <Link href={`mailto:${socials.email}`} styleType="dark">
            {socials.email}
          </Link>
          <Link href={`tel:${socials.phone}`} styleType="dark">
            {socials.phone}
          </Link>
          <Link href={socials.github} target="_blank" styleType="dark" isIcon>
            <VscGithub />
          </Link>
          <Link href={socials.telegram} target="_blank" styleType="dark" isIcon>
            <BsTelegram />
          </Link>
        </Socials>
      </Content>
      <Content>
        <Navigations>
          {navigations.map((item) => (
            <Link key={item.key} href={item.href}>
              {item.text}
            </Link>
          ))}
        </Navigations>
        <Text>{copyright}</Text>
      </Content>
    </Container>
  )
}

export default Footer
