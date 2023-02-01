import { FC } from "react"

import { Project } from "@ui"

import { Container, Title, Content } from "./Projects.styles"

import { projects } from "./constants"

const Projects: FC = () => {
  return (
    <Container>
      <Title text={projects.title} />
      <Content>
        {projects.items.map((item, index) => (
          <Project key={`project_${index}`} {...item} />
        ))}
      </Content>
    </Container>
  )
}

export default Projects
