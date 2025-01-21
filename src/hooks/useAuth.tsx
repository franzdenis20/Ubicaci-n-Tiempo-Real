// src/hooks/useAuthInitialization.ts
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks/useSlice';
import { onLogin, onLogout } from '../store/auth/authSlice';

export const useAuthInitialization = () => {
  const dispatch = useAppDispatch();

  console.log("useAuthInitialization render")
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (user) {
      dispatch(onLogin(user)); 
    } else {
      dispatch(onLogout(null));
    }
  }, [dispatch]);
};