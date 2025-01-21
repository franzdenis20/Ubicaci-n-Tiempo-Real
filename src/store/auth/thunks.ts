import type { AppDispatch } from "../store"
import { onChecking, onLogin, onLogout } from "./authSlice"
import { supabase } from "../../supabase/supabase"

export const startLogin = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(onChecking())

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      if (!data.user) throw new Error("No user data")

      const { data: adminData, error: adminError } = await supabase
        .from("administradores")
        .select("*")
        .eq("id", data.user.id)
        .single()

      if (adminError) throw adminError

      dispatch(
        onLogin({
          id: adminData.id,
          nombre: adminData.nombre,
          correo: adminData.correo,
        }),
      )
    } catch (error) {
      console.error(error)
      dispatch(onLogout("Credenciales incorrectas"))
    }
  }
}

export const checkAuthStatus = () => {
  return async (dispatch: AppDispatch) => {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      dispatch(onLogout(null))
      return
    }

    try {
      const { data: adminData, error: adminError } = await supabase
        .from("administradores")
        .select("*")
        .eq("id", session.user.id)
        .single()

      if (adminError) throw adminError

      dispatch(
        onLogin({
          id: adminData.id,
          nombre: adminData.nombre,
          correo: adminData.correo,
        }),
      )
    } catch (error) {
      console.error(error)
      dispatch(onLogout("Error al recuperar datos del usuario"))
    }
  }
}

export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await supabase.auth.signOut()
      dispatch(onLogout(null))
    } catch (error) {
      console.error(error)
      dispatch(onLogout("Error al cerrar sesión"))
    }
  }
}

