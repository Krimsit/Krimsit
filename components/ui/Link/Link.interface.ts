import { ReactNode } from "react"

export type StyleType = "base" | "dark" | "primary"

export interface LinkProps {
  href: string
  children: ReactNode
  styleType?: StyleType
  target?: string
  isIcon?: boolean
}

export interface StylesBase {
  styleType: StyleType
  isIcon?: boolean
}
