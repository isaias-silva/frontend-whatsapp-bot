import ToggleButton from '../toggleButton/ToggleButton'
import { Content, LogoContenier, IMG_Logo, ItemStyle ,ItemsContainer} from './styles'
import MenuItems from '../../Data/MenuItems'
import BarItem from './BarItem'
interface Props {
  toggleTheme(): void
}

const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Content>
      <LogoContenier>
        <IMG_Logo src='' alt='Sua Logo' />
      </LogoContenier>
      <ItemsContainer>
      {MenuItems.map((item) => (
        <ItemStyle key={item.title}>
          <BarItem key={item.title} icon={<item.iconLight></item.iconLight>} title={item.title} />
        </ItemStyle>
      ))}
      </ItemsContainer>
      <ToggleButton toggleTheme={toggleTheme} />
    </Content>
  )
}

export default NavBar
