import { FC } from "react"

import { useMediaQuery } from "@hooks"

import { Link } from "@ui"
import { VscGithub } from "react-icons/vsc"
import { BsTelegram } from "react-icons/bs"

import { Container, Logo, Navigations, Socials } from "./Header.styles"

import { navigations, socials, logos } from "../constants"

const Header: FC = () => {
  const isAdaptive = useMediaQuery("(max-width:768px)")

  return (
    <Container>
      <Logo
        src={logos.default}
        alt="Krimsit"
        width={!isAdaptive ? 180 : 120}
        height={64}
        priority
      />
      {!isAdaptive && (
        <Navigations>
          {navigations.map((item) => (
            <Link key={item.key} href={item.href}>
              {item.text}
            </Link>
          ))}
        </Navigations>
      )}
      <Socials>
        <Link href={socials.github} target="_blank" isIcon>
          <VscGithub />
        </Link>
        <Link href={socials.telegram} target="_blank" isIcon>
          <BsTelegram />
        </Link>
      </Socials>
    </Container>
  )
}

export default Header
