import { FC } from "react"

import { Container, Title, Content } from "./Projects.styles"
import { Project } from "@ui"

const Projects: FC = () => {
  return (
    <Container>
      <Title text="Проекты" />
      <Content>
        <Project
          image="https://sun1.megafon-nn.userapi.com/s/v1/ig2/1rQ7o2HZexGFU3HzHOUTIJi83J6XvCfkCDzEUuqAxFAAC-nGlX-hFSY9fbncnRlweIJjEyjukFnB4wkxX1P7ytVA.jpg?size=200x200&quality=95&crop=572,0,1556,1556&ava=1"
          title="test"
          description="dest"
          techStack={["javascript", "typescript"]}
        />
        <Project
          title="test"
          description="dest"
          techStack={["javascript", "typescript"]}
        />
        <Project
          image="https://sun1.megafon-nn.userapi.com/s/v1/ig2/1rQ7o2HZexGFU3HzHOUTIJi83J6XvCfkCDzEUuqAxFAAC-nGlX-hFSY9fbncnRlweIJjEyjukFnB4wkxX1P7ytVA.jpg?size=200x200&quality=95&crop=572,0,1556,1556&ava=1"
          title="test"
          description="dest"
          techStack={["javascript", "typescript"]}
        />
        <Project
          title="test"
          description="dest"
          techStack={["javascript", "typescript"]}
        />
        <Project
          image="https://sun1.megafon-nn.userapi.com/s/v1/ig2/1rQ7o2HZexGFU3HzHOUTIJi83J6XvCfkCDzEUuqAxFAAC-nGlX-hFSY9fbncnRlweIJjEyjukFnB4wkxX1P7ytVA.jpg?size=200x200&quality=95&crop=572,0,1556,1556&ava=1"
          title="test"
          description="dest"
          techStack={["javascript", "typescript"]}
        />
        <Project
          title="test"
          description="dest"
          techStack={["javascript", "typescript"]}
        />
      </Content>
    </Container>
  )
}

export default Projects
