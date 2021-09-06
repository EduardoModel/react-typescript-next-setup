// Disable the eslint rule for a file without the need to change the main config file
/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components'
import theme from './theme'

// Easy way to define the types of the content of an object
export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
