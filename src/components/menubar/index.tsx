import ToggleButton from '../toggleButton/ToggleButton'
import { Content, LogoContenier, IMG_Logo } from './styles'
interface Props {
  toggleTheme(): void
}

const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Content>
      <LogoContenier>
        <IMG_Logo src='' alt='Sua Logo' />
      </LogoContenier>
      <ToggleButton toggleTheme={toggleTheme} />
    </Content>
  )
}

export default NavBar
