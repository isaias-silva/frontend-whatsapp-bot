import { useState } from 'react'
import GlobalStyle from '../../styles/globalStyle'
import store from '../../store/store'
import { Provider } from 'react-redux'
import AppRouters from '../../routes/routes'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../../styles/theme/styles'
import { ContentApp } from './styles'
import MenuBar from '../../components/menubar'
function App() {
  const [theme, setTheme] = useState(darkTheme)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme)
  }
  return (
    <ContentApp>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MenuBar />
          <AppRouters />
        </ThemeProvider>
      </Provider>
    </ContentApp>
  )
}

export default App
