import styled from 'styled-components'
import { InputHTMLAttributes, FormHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface FormsProps extends FormHTMLAttributes<HTMLFormElement> {}

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 24px 8px;
  width: 600px;
  height: 320px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.login.backgound};
`

export const Form = styled.form<FormsProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 38px;
  width: 273px;
  height: 273px;
  flex: none;
  order: 0;
  flex-grow: 0;
`

export const Input = styled.input<InputProps>`
  background: ${(props) => props.theme.login.input};
  height: 30px;
  width: 242px;
  border-radius: 0px;
`

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 38px;
  width: 273px;
  height: 273px;
  input#Button {
    cursor: pointer;
    background: ${(props) => props.theme.login.button};
    color: ${(props) => props.theme.login.input};
    font-weight: 900;
    border-radius: 10px;
    width: 200px;
  }
  input#Button:hover {
    color: ${(props) => props.theme.colors.secondary_color};
  }
`
export const Label = styled.label`
  display: flex;
  margin: 0%;
  align-items: center;

  #userIcon {
    color: ${(props) => props.theme.login.text};
    padding: 7px;
    background-color: #fff;
  }
  #passwdIcon {
    color: ${(props) => props.theme.login.text};
    padding: 7px;
    background-color: #fff;
  }
`
export const DivIconKey = styled.div`
  height: 273px;
  width: 279px;
  left: 297px;
  top: 31.5px;
  border-radius: 0px;
`
export const Title = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme.colors.fontColor};
`
