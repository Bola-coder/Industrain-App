import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "./../libraries/firabse";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import AsyncStorage from "../utils/AsyncStorage";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const colRef = collection(db, "users");

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currUser) => {
      if (currUser) {
        setAuthenticated(true);
        // console.log(currUser);
        getUserDataFromDB(currUser);
      } else {
        return;
      }
    });
    return () => unsuscribe;
  }, []);

  // Firebase Error handling
  const handleFirebaseAuthErrors = (err) => {
    if (
      err.code === "auth/user-not-found" ||
      err.code === "auth/wrong-password"
    ) {
      setError("Invalid email or password. Please check and try again");
    } else if (err.code === "auth/weak-password") {
      setError("Your password should be a minimum of 6 characters");
    } else if (err.code === "auth/email-already-in-use") {
      setError("The Email specified is already in use");
    } else if (err.code === "auth/invalid-email") {
      setError("The email address supplied is invalid");
    } else if (err.ocde === "auth/user-not-found") {
      setError("No user with the specified email address");
    } else if (err.code === "auth/too-many-requests)") {
      setError(
        "Access to your account has been temporaily banned due to many failed login attempt. Please try again later or reset your passwordf"
      );
    } else {
      setError("Soemthing went wrong. Please try again", err);
    }
  };

  // Functiomn to save user to database
  const saveUserToDB = (user) => {
    let userExist;
    // console.log("Working!!");
    getDocs(colRef)
      .then((snapshot) => {
        userExist = snapshot.docs.some((doc) => {
          return doc.data().email === user.email;
        });
      })
      .then(() => {
        // console.log(userExist);
        if (!userExist) {
          addDoc(colRef, {
            email: user.email,
            uid: user.uid,
            name: "",
            phone: "",
            gender: "",
            address: "",
            dob: "",
            school: "",
            degree: "",
            course: "",
            level: "",
            passingYear: "",
          })
            .then(() => {
              console.log("User profile created successfully");
            })
            .catch((err) => {
              console.log("Error when creating user profile", err);
            });
        }
        // else {
        //   console.log(`User with email ${user.email} already exist`);
        // }
      })
      .catch((err) => {
        console.log("Error when getting users from db", err);
      });
  };

  // Get user's data from Firestore, and them save the user to the users state and asyncStorage
  const getUserDataFromDB = (user) => {
    let activeUser;
    getDocs(colRef)
      .then((snapshot) => {
        activeUser = snapshot.docs.find((doc) => {
          return doc.data().email === user.email;
        });
      })
      .then(async () => {
        setUser(activeUser.data());
        //Set the user to the phone async storage
        // console.log(activeUser.data());
        await AsyncStorage.storeData("@userData", activeUser.data());
      })
      .catch((err) => {
        console.log("Error fetching currently logged in user profile", err);
      });
  };

  const signup = async (email, password) => {
    setAuthLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        let uid = userCredentials?.user.uid;
        let curuser = { email, uid };
        saveUserToDB(curuser);
        await AsyncStorage.storeData("@userData", { email, password });
        // The user email amd password is saved to localStotage immediately after signup
      })
      .catch((err) => {
        console.log("An error occured during sign up", err);
        handleFirebaseAuthErrors(err);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  const login = async (email, password) => {
    setAuthLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // DO nothing
      })
      .catch((err) => {
        console.log("An error occured during log in", err.message);
        handleFirebaseAuthErrors(err);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  const logout = async () => {
    console.log("Signing out");
    await signOut(auth)
      .then(async () => {
        try {
          await AsyncStorage.deleteDataFromStorage("@userData");
          setAuthenticated(false);
          console.log("User signed out successfully");
        } catch (err) {
          console.log("Failed to signout");
        }
      })
      .catch((err) => {
        console.log("Error while signing out", err);
      });
  };

  // const getCurrentUserSession =

  const values = {
    user,
    setUser,
    signup,
    login,
    error,
    authLoading,
    authenticated,
    saveUserToDB,
    getUserDataFromDB,
    logout,
    setError,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
