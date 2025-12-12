import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const registerUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // observe user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setuser(currentUser);
      setloading(false);
       
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    signInGoogle,
    logOut,
    updateUserProfile,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
