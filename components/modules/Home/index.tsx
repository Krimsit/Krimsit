import { FC } from "react"

import About from "./About"
import TechStack from "./TechStack"
import Projects from "./Projects"

import { Container } from "./Home.styles"

const Home: FC = () => {
  return (
    <Container>
      <About />
      <TechStack />
      <Projects />
    </Container>
  )
}

export default Home
