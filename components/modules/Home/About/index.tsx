import { FC } from "react"

import { Container, Title, Avatar } from "./About.styles"

import { title } from "../constants"

const About: FC = () => {
  return (
    <Container>
      <Title>{title.text}</Title>
      <Avatar src={title.avatar} alt="Моё фото" priority />
    </Container>
  )
}

export default About
