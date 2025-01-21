/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "../../supabase/supabase";
import type { AppDispatch } from "../store";
import { onChecking, onLogin, onLogout } from "./authSlice";

export const startLogin = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data: adminData, error: adminError } = await supabase
        .from("administrators")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .single();

      if (adminError || !adminData) {
        throw new Error("Credenciales incorrectas");
      }

      const user = {
        id: adminData.id,
        username: adminData.username,
        email: adminData.email,
      };

      localStorage.setItem('user', JSON.stringify(user));
      dispatch(onLogin(user));
    } catch (error: any) {
      console.error("Error en login:", error);
      dispatch(onLogout("Credenciales incorrectas o usuario no encontrado"));
    }
  };
};

export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    localStorage.removeItem('user');
    dispatch(onLogout(null));
  };
};