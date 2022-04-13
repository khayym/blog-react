import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from '../config/firebase-config';

interface UserInterface {
  user?: any;
  uid?: string;
  email?: string | null;
  displayName?: string | null;
  imgUrl?: string | null;
}

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser]: any = useState<UserInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user
        ? setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            imgUrl: user.photoURL
          })
        : setUser(null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginError('');
    } catch (err) {
      setLoginError('Email or password incorrect, please try again');
    }
  };

  const logout: any = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        loginError
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
