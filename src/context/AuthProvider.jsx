import React, { use, useEffect, useState } from "react";
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
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);
  const [loading, setloading] = useState(true);
  const [role, setRole] = useState("");
  const [userStatus, setUserStatus] = useState(""); 

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

  // role data
  useEffect(() => {
    if (!user) {
      return;
    }
    axios.get(`http://localhost:3000/users/role/${user?.email}`).then( res => {
      setRole(res.data.role);
      setRoleLoading(false);
      setUserStatus(res.data.status);
      console.log("Fetched role from server:", res.data.role);
    });
  }, [user]);
  console.log(role)
  console.log(userStatus)
  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    signInGoogle,
    logOut,
    updateUserProfile,
    roleLoading,
    role,
    userStatus
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
