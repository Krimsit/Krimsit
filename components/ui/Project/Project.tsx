import { FC } from "react"

import { ProjectProps } from "./Project.interface"

import { Base, Title, Description } from "./Project.styles"

const Project: FC<ProjectProps> = ({
  title,
  techStack,
  team,
  responsibilities,
  position
}) => {
  return (
    <Base>
      <Title>{title}</Title>
      <Description>
        <span>Роль: </span> {position}
      </Description>
      <Description>
        <span>Обязанности: </span> {responsibilities.join(", ")}
      </Description>
      <Description>
        <span>Команда: </span> {team.join(", ")}
      </Description>
      <Description>
        <span>Технологии: </span> {techStack.join(", ")}
      </Description>
    </Base>
  )
}

export default Project
