import { Content, Form, Input, DivInputs, Label, DivIconKey, Title } from './styles/styles'
import IconKey from './styles/icon.svg'

import { AiOutlineUser } from 'react-icons/ai'
import { TbLock } from 'react-icons/tb'
import { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { checkAuth } from '../../store/ducks/auth/index'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispath = useAppDispatch()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispath(checkAuth({ username: username, password: password }))
  }
  return (
    <Content>
      <Form method='' onSubmit={handleSubmit}>
        <Title>Login</Title>
        <DivInputs>
          <Label>
            <AiOutlineUser id='userIcon' />
            <Input
              type='text'
              name='username'
              id='user'
              placeholder='Username'
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </Label>
          <Label>
            <TbLock id='passwdIcon' />
            <Input
              type='password'
              name='password'
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </Label>
          <Input type='submit' value='Login' id='Button' />
        </DivInputs>
      </Form>
      <DivIconKey>
        <img src={IconKey} alt='' />
      </DivIconKey>
    </Content>
  )
}

export default Login
