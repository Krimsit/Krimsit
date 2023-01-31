import { FC } from "react"

import { Container, Title, Avatar } from "./About.styles"

const About: FC = () => {
  return (
    <Container>
      <Title>
        Привет 👋,
        <br /> Меня зовут
        <br /> <span>Андей</span>
        <br /> И я Frontend-разработчик
      </Title>
      <Avatar
        src="https://sun1.megafon-nn.userapi.com/s/v1/ig2/1rQ7o2HZexGFU3HzHOUTIJi83J6XvCfkCDzEUuqAxFAAC-nGlX-hFSY9fbncnRlweIJjEyjukFnB4wkxX1P7ytVA.jpg?size=200x200&quality=95&crop=572,0,1556,1556&ava=1"
        alt="Моё фото"
      />
    </Container>
  )
}

export default About
