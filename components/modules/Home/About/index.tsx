import { FC } from "react"

import { useMediaQuery } from "@hooks"

import { Container, Title, Avatar } from "./About.styles"

import { title } from "../constants"

const About: FC = () => {
  const isAdaptive = useMediaQuery("(max-width:768px)")

  return (
    <Container>
      <Title>{title.text}</Title>
      <Avatar
        src={title.avatar}
        alt="Моё фото"
        width={!isAdaptive ? 350 : 300}
        height={!isAdaptive ? 350 : 300}
        priority
      />
    </Container>
  )
}

export default About
