import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { shade } from 'polished'

interface Props {
  toggleTheme(): void
}

const Div = styled.div`
  align-self: center;
  margin: 0px auto 50px;
  flex: 1 1 auto;
  
  #uncheckedIcon {
    color: white;
    margin: 5px 5px auto;
  }
  #checkedIcon {
    color: white;
    margin: 5px 5px auto;
    font-size: 20px;
  }
`

const ToggleButton: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Div>
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={<BsSunFill id='checkedIcon' />}
        uncheckedIcon={<BsMoonFill id='uncheckedIcon' />}
        offColor={shade(0.3, colors.secondary_color)}
        onColor={shade(0.25, colors.fontColor)}
      />
    </Div>
  )
}

export default ToggleButton
