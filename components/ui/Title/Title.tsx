import { FC } from "react"

import { TitleProps } from "./Title.interface"

import { Base } from "./Title.styles"

const Title: FC<TitleProps> = ({ text, description, className }) => {
  return (
    <Base className={className}>
      {text}
      {!!description && <span>{description}</span>}
    </Base>
  )
}

export default Title
