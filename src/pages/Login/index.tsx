import { Content, Form, Input, DivInputs, Label, DivIconKey, Title} from './styles/styles'
import IconKey from './styles/icon.svg'

import { AiOutlineUser } from 'react-icons/ai'
import { TbLock } from 'react-icons/tb'

function Login() {
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <Content>
      <Form method='' onSubmit={handleSubmit}>
        <Title>Login</Title>
        <DivInputs>
          <Label>
            <AiOutlineUser id='userIcon'/>
            <Input type='text' name='username' id='user' placeholder='Username' />
          </Label>
          <Label>
            <TbLock id='passwdIcon'/>
            <Input type='text' name='password' placeholder='Password' />
          </Label>
          <Input type='submit' value='Login' id='Button'/>
        </DivInputs>
      </Form>
      <DivIconKey>
        <img src={IconKey} alt='' />
      </DivIconKey>
    </Content>
  )
}

export default Login
