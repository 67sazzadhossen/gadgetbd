import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const SignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const GoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const UpdateProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const Logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoading(false);

      const loggedUser = { email: currentUser?.email };

      if (currentUser) {
        axios
          .post("http://localhost:3000/jwt", loggedUser, {
            withCredentials: true,
          })
          // .post("https://gadgetbd-server.vercel.app/jwt", loggedUser, {
          //   withCredentials: true,
          // })
          .then(() => {
            // console.log("token", res.data);
          });
      } else {
        axios
          // .post("https://gadgetbd-server.vercel.app/log-out", loggedUser, {
          //   withCredentials: true,
          // })
          .post("http://localhost:3000/log-out", loggedUser, {
            withCredentials: true,
          })
          .then(() => {
            // console.log(res.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    SignUp,
    UpdateProfile,
    currentUser,
    loading,
    setLoading,
    Login,
    Logout,
    GoogleLogin,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
