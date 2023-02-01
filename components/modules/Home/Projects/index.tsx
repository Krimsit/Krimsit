import { FC } from "react"

import { Project, Title } from "@ui"

import { Container, ProjectsGrid } from "./Projects.styles"

import { projects } from "@modules/Projects/constants"

const About: FC = () => {
  return (
    <Container>
      <Title text={projects.title} description={projects.description} />
      <ProjectsGrid>
        {projects.items.slice(0, 3).map((item, index) => (
          <Project key={`project_${index}`} {...item} />
        ))}
      </ProjectsGrid>
    </Container>
  )
}

export default About
