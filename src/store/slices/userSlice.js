import { createSlice } from '@reduxjs/toolkit'
import userList from '../../helpers/userList'

const initialState = {
  users: userList
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload)
    },

    updateUser(state,action) {
      const findUser = state.users.find(user => user.id == action.payload.id)

      if(findUser) {
        findUser.name = action.payload.name
        findUser.email = action.payload.email
      }
    },

    deleteUser(state, action) {
      state.users = state.users.filter(user => user.id != action.payload)
    }
  }
})


export const { addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer