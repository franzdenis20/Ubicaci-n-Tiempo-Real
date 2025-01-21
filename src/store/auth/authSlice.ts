import { createSlice } from "@reduxjs/toolkit"
import { AuthState } from "../interfaces"



const initialState: AuthState = {
  status: "checking",
  user: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = "checking"
      state.user = null
      state.errorMessage = null
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated"
      state.user = payload
      state.errorMessage = null
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated"
      state.user = null
      state.errorMessage = payload
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null
    },
  },
})

export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions

