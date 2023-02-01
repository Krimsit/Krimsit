import { FC } from "react"

import { Link } from "@ui"
import { VscGithub } from "react-icons/vsc"
import { BsTelegram } from "react-icons/bs"

import { SidebarProps } from "./Sidebar.interface"

import { Base, Head, Close, Items } from "./Sidebar.styles"
import { Socials } from "../Header/Header.styles"

import { navigations, socials } from "@/components/layout/constants"

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Base isOpen={isOpen}>
      <Head>
        <Socials>
          <Link href={socials.github} target="_blank" isIcon>
            <VscGithub />
          </Link>
          <Link href={socials.telegram} target="_blank" isIcon>
            <BsTelegram />
          </Link>
        </Socials>
        <Close onClick={onClose} />
      </Head>
      <Items>
        {navigations.map((item) => (
          <Link key={item.key} href={item.href}>
            {item.text}
          </Link>
        ))}
      </Items>
    </Base>
  )
}

export default Sidebar
