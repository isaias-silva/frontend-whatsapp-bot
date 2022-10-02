import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.menubar.background};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 200px;
  left: 0px;
  top: 0px;
`
