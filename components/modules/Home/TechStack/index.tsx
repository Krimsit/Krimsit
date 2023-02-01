import { FC } from "react"

import { Title } from "@ui"

import { Container, TechsGrid, Tech } from "./TechStack.styles"

const TechStack: FC = () => {
  return (
    <Container>
      <Title text="Технологический стек" description="Основные технологии" />
      <TechsGrid>
        <Tech src="/icons/react-query.png" alt="HTML 5" />
        <Tech src="/icons/react.png" alt="HTML 5" />
        <Tech src="/icons/javascript.png" alt="HTML 5" />
        <Tech src="/icons/typescript.png" alt="HTML 5" />
        <Tech src="/icons/redux.png" alt="HTML 5" />
        <Tech src="/icons/html5.png" alt="HTML 5" />
        <Tech src="/icons/css3.png" alt="HTML 5" />
        <Tech src="/icons/git.png" alt="HTML 5" />
        <Tech src="/icons/docker.png" alt="HTML 5" />
        <Tech src="/icons/jest.png" alt="HTML 5" />
        <Tech src="/icons/webpack.png" alt="HTML 5" />
        <Tech src="/icons/nodejs.png" alt="HTML 5" />
      </TechsGrid>
    </Container>
  )
}

export default TechStack
