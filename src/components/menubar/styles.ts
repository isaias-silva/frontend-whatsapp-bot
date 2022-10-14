import styled from 'styled-components'
import { ImgHTMLAttributes } from 'react'

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Content = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.menubar.background};
  flex-direction: column;
  flex-basis:33.33%
  
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  
  width: 225px;
  height: 100%;
  left: 0px;
  top: 0px;
` 
export const ItemStyle = styled.div`
  display: flex;
  align-items: center;
  width: 92%;
  height: 100%;
  padding-left:10px;
  border-style: ridge;
  border-bottom: 2px solid gray;
  cursor:pointer;
  `

export const ItemsContainer = styled.div`
width: 100%;
height: 10%;
`

export const IMG_Logo = styled.img<ImgProps>`
  width: 100%;
  height: 100%;
  color: white;
`
export const LogoContenier = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.login.button};
  height: 72px;
  width: 100%;
  border-radius: 0px;
  text-align: center;
  justify-content: center;
`
