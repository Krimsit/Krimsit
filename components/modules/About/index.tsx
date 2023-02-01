import { FC } from "react"

import { WorkInfo } from "@ui"

import {
  Container,
  Content,
  Title,
  Text,
  Works,
  Techs,
  TechsList
} from "./About.styles"

const About: FC = () => {
  return (
    <Container>
      <div>
        <Content>
          <Title text="About Me" />
          <Text>
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </Text>
        </Content>
        <Content>
          <Title text="Work Experience" />
          <Works>
            <WorkInfo
              title="Junior Web Developer"
              position="Full Time"
              workplace="Dr. Rajkumar’s Learning App"
              date="Sep 2021 - Dec 2021"
            />
            <WorkInfo
              title="Junior Web Developer"
              position="Full Time"
              workplace="Dr. Rajkumar’s Learning App"
              date="Sep 2021 - Dec 2021"
            />
            <WorkInfo
              title="Junior Web Developer"
              position="Full Time"
              workplace="Dr. Rajkumar’s Learning App"
              date="Sep 2021 - Dec 2021"
            />
          </Works>
        </Content>
        <Content>
          <Title text="Education" />
          <Works>
            <WorkInfo
              title="Junior Web Developer"
              position="Full Time"
              workplace="Dr. Rajkumar’s Learning App"
              date="Sep 2021 - Dec 2021"
            />
          </Works>
        </Content>
      </div>
      <Content>
        <Title text="Навыки" />
        <Techs>
          <p>Frontend:</p>
          <TechsList>
            <li>React</li>
            <li>Typescript</li>
            <li>Javascript</li>
          </TechsList>
        </Techs>
        <Techs>
          <p>Backend:</p>
          <TechsList>
            <li>NodeJS</li>
            <li>ASP.NET</li>
          </TechsList>
        </Techs>
        <Techs>
          <p>DataBase:</p>
          <TechsList>
            <li>MongoDB</li>
            <li>PostgresSQL</li>
          </TechsList>
        </Techs>
        <Techs>
          <p>Other:</p>
          <TechsList>
            <li>Docker + Docker-compose</li>
            <li>Git</li>
          </TechsList>
        </Techs>
      </Content>
    </Container>
  )
}

export default About
