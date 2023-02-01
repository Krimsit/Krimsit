export const about = {
  title: "Обо мне",
  text: (
    <>
      <p>Меня зовут Андей Субботин и я Frontend разработчик</p>
      <p>
        <span>Самая интересная и/или технически сложная задача из опыта:</span>
        Реализация логики распределения определенного количества товаров по
        упаковкам с минимальной затратой количества упаковок. Оптимизация
        большой таблицы с вложенными компонентами и с большим кол-вом элементов.
        Реализация библиотеки компонентов с нуля с помощью Storybook
      </p>
      <p>
        <span>Куда хотелось бы развиваться:</span>
        Хотелось бы развиваться технически, получать новый опыт и изучать новые
        технологии с дальнейшим применением на новых проектах, но немного
        погрузиться в менеджмент тоже хотелось бы, чтобы лучше понимать как в
        целом устроена их работа
      </p>
    </>
  )
}

export const work_experience = {
  title: "Опыт работы",
  items: [
    {
      title: "Junior/Middle Frontend Разработчик",
      workplace: "ООО Хокинг Бразерс",
      position: "Full time",
      date: "Октябрь 2021 — по настоящее время"
    },
    {
      title: "Frontend разработчик",
      workplace: "Кафедра ИВЦ ВлГУ",
      position: "Part time",
      date: "Февраль 2021 — по настоящее время"
    }
  ]
}

export const education = {
  title: "Образование",
  items: [
    {
      title: "Информационные системы и технологии",
      workplace:
        "Владимирский государственный университет им. А.Г. и Н.Г. Столетовых, Владимир",
      position: "Бакалавриат",
      date: "2020 — 2024"
    }
  ]
}

export const skills = {
  title: "Навыки",
  items: [
    {
      title: "Frontend:",
      items: [
        "Typescript/Javascript",
        "React",
        "React Query",
        "Redux/React Context",
        "Jest/Playwright/React testing library",
        "SCSS/Styled-components",
        "HTML 5",
        "CSS 3"
      ]
    },
    {
      title: "Backend:",
      items: [
        "NodeJS",
        "Express",
        "Websockets",
        "ASP.NET Core",
        "REST API",
        "MongoDB",
        "PostgresSQL"
      ]
    },
    {
      title: "Другие:",
      items: [
        "GIT",
        "Docker + Docker-compose",
        "Unit тестирование",
        "Webpack/Gulp"
      ]
    }
  ]
}
