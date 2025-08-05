import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase.init";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { getItemFromLC } from "../utilities/handleLC";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newBalance, setNewBalance] = useState(10000);

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateBalance = (amount) => {
    console.log(amount);

    let currentUserBalance = getItemFromLC(user.email);

    let newCurrentUserBalance = currentUserBalance - amount;

    setNewBalance(newCurrentUserBalance);

    localStorage.setItem(user.email, newCurrentUserBalance);
  };
  useEffect(() => {
    const currentUser = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      currentUser();
    };
  }, []);
  const userInfo = {
    createUser,
    signInUser,
    user,
    logoutUser,
    loading,
    updateBalance,
    newBalance,
    signInGoogle,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
