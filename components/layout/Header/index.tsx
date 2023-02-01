import { FC } from "react"

import { useMediaQuery } from "@hooks"

import { Link } from "@ui"
import { VscGithub } from "react-icons/vsc"
import { BsTelegram } from "react-icons/bs"

import { HeaderProps } from "./Header.interface"

import { Container, Logo, Navigations, Socials, Open } from "./Header.styles"

import { navigations, socials, logos } from "../constants"

const Header: FC<HeaderProps> = ({ onOpen }) => {
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
      {isAdaptive && <Open onClick={onOpen} />}
    </Container>
  )
}

export default Header
