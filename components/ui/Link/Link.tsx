import { FC } from "react"

import { LinkProps } from "./Link.interface"

import { Content } from "./Link.styles"

const Link: FC<LinkProps> = ({
  href,
  children,
  styleType = "base",
  prefetch,
  isIcon
}) => {
  return (
    <Content
      styleType={styleType}
      href={href}
      prefetch={prefetch}
      isIcon={isIcon}>
      {children}
    </Content>
  )
}

export default Link
