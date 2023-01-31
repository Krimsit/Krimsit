import { ReactNode } from "react"

export type StyleType = "base" | "dark" | "primary"

export interface LinkProps {
  href: string
  children: ReactNode
  styleType?: StyleType
  prefetch?: boolean
  isIcon?: boolean
}

export interface StylesBase {
  styleType: StyleType
  isIcon?: boolean
}
