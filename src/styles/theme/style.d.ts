import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    menubar: {
      background: string
    }
    login: {
      backgound: string
      text: string
      button: string
      input: string
    }
    colors: {
      background: string
      secondary_color: string
      fontColor: string
    }
  }
}
