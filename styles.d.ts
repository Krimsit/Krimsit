import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    background: string
    primary: string
    text: string
    title: string
    font: {
      url: string
      name: string
    }
  }
}
