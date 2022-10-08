import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface ILogin {
  readonly username: string
  readonly password: string
  readonly data?: []
  readonly authenticated: boolean
}

const initialState = {
  username: ' ',
  password: ' ',
  data: [],
  authenticated: false,
} as ILogin

const Reducer = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    checkAuth: (state, action: PayloadAction<ILogin>) => {
      return console.log(`
    Essa é a carga: 
    username: ${action.payload.username},
    password: ${action.payload.password}`)
    },
  },
})

export const selectCount = (state: RootState) => state
export const { checkAuth } = Reducer.actions

export default Reducer.reducer
