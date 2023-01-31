import { FC } from "react"
import Image from "next/image"

import { ProjectProps } from "./Project.interface"

import {
  Base,
  ImageContainer,
  Content,
  Title,
  Description,
  Techs
} from "./Project.styles"

const Project: FC<ProjectProps> = ({
  image,
  title,
  description,
  techStack
}) => {
  return (
    <Base>
      <ImageContainer noImage={!image}>
        <Image
          src={image || "/images/no-image.png"}
          alt={title}
          fill={!!image}
          width={!image ? 80 : undefined}
          height={!image ? 80 : undefined}
        />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Techs>
          <span>Технологии: </span> {techStack.join(", ")}
        </Techs>
      </Content>
    </Base>
  )
}

export default Project
