import { FC } from "react"

import About from "./About"
import TechStack from "./TechStack"
import Projects from "./Projects"

const Home: FC = () => {
  return (
    <>
      <About />
      <TechStack />
      <Projects />
    </>
  )
}

export default Home
