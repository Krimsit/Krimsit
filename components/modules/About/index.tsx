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

import { about, education, work_experience, skills } from "./constants"

const About: FC = () => {
  return (
    <Container>
      <div>
        <Content>
          <Title text={about.title} />
          <Text>{about.text}</Text>
        </Content>
        <Content>
          <Title text={work_experience.title} />
          <Works>
            {work_experience.items.map((item, index) => (
              <WorkInfo key={`work_${index}`} {...item} />
            ))}
          </Works>
        </Content>
        <Content>
          <Title text={education.title} />
          <Works>
            {education.items.map((item, index) => (
              <WorkInfo key={`education_${index}`} {...item} />
            ))}
          </Works>
        </Content>
      </div>
      <Content>
        <Title text={skills.title} />
        {skills.items.map((item) => (
          <Techs key={item.title}>
            <p>{item.title}</p>
            <TechsList>
              {item.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </TechsList>
          </Techs>
        ))}
      </Content>
    </Container>
  )
}

export default About
