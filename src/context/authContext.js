"use client"
import React, { useState, useEffect, createContext, useContext, ReactNode, FC } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../../firebase';



const AuthContext = createContext();

console.log("auth",auth)


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  console.log("user14", user)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setShowModal(false)

      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setShowModal(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <AuthContext.Provider value={{ user, setShowModal, showModal,loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
