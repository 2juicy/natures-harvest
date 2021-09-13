import React, { useEffect, useContext, useState } from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

interface Auth {
  currentUser: firebase.User | null;
  signup: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  signin: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  signout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  updateEmail: (email: string) => any;
  updatePassword: (password: string) => any;
}

const AuthContext = React.createContext<Auth | null>(null);

export function useAuth(): any {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signin(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signout() {
    return auth.signOut();
  }

  function forgotPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email: string) {
    return currentUser?.updateEmail(email);
  }

  function updatePassword(password: string) {
    return currentUser?.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    signout,
    forgotPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
