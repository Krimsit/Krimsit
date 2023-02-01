import { FC } from "react"

import { MdLocationCity, MdCalendarToday } from "react-icons/md"

import { WorkInfoProps } from "./WorkInfo.interface"

import { Base, Title, AdditionalInfo, Position, Row } from "./WorkInfo.styles"

const WorkInfo: FC<WorkInfoProps> = ({ title, workplace, position, date }) => {
  return (
    <Base>
      <Row>
        <Title>{title}</Title>
        <Position>{position}</Position>
      </Row>
      <Row>
        <AdditionalInfo>
          <MdLocationCity />
          {workplace}
        </AdditionalInfo>
        <AdditionalInfo>
          <MdCalendarToday />
          {date}
        </AdditionalInfo>
      </Row>
    </Base>
  )
}

export default WorkInfo
