import { FC } from "react"

import { Title } from "@ui"

import { Container, TechsGrid, Tech } from "./TechStack.styles"

import { techs } from "../constants"

const TechStack: FC = () => {
  return (
    <Container>
      <Title text={techs.title} description={techs.description} />
      <TechsGrid>
        {techs.items.map((item) => (
          <Tech key={item.src} src={item.src} alt={item.alt} />
        ))}
      </TechsGrid>
    </Container>
  )
}

export default TechStack
