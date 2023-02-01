import { FC } from "react"

import { useMediaQuery } from "@hooks"

import { Title } from "@ui"

import { Container, TechsGrid, Tech } from "./TechStack.styles"

import { techs } from "../constants"

const TechStack: FC = () => {
  const isAdaptive = useMediaQuery("(max-width:768px)")

  return (
    <Container>
      <Title text={techs.title} description={techs.description} />
      <TechsGrid>
        {techs.items.map((item) => (
          <Tech
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={!isAdaptive ? 120 : 60}
            height={!isAdaptive ? 120 : 60}
          />
        ))}
      </TechsGrid>
    </Container>
  )
}

export default TechStack
