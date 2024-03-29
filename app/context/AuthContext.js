import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../libraries/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import AsyncStorage from "../utils/AsyncStorage";
import { useQuery } from "react-query";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [finished, setFinished] = useState(false);
  const colRef = collection(db, "users");

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currUser) => {
      if (currUser) {
        setAuthenticated(true);
        setUser(currUser);
        // getUserDataFromDB(currUser.email);
      } else {
        return;
      }
    });
    return () => unsuscribe;
  }, []);

  // useQueryHook to get the user from the database once the saveToDb function has successfuly finished
  const { isLoading, isError, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserDataFromDB(user?.email),
    enabled: finished,
  });

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
  const saveUserToDB = async (user) => {
    try {
      const snapshot = await getDocs(colRef);
      const userExists = snapshot.docs.some(
        (doc) => doc.data().email === user.email
      );

      if (!userExists) {
        await addDoc(colRef, {
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
          // Other user profile information...
        });
        console.log("User profile created successfully");
        setFinished(true);
      }
    } catch (err) {
      console.log("Error when creating user profile", err);
    }
  };

  // Get user's data from Firestore, and them save the user to the users state and asyncStorage
  const getUserDataFromDB = async (email) => {
    try {
      const snapshot = await getDocs(colRef);
      const activeUser = snapshot.docs.find(
        (doc) => doc.data().email === email
      );

      if (activeUser) {
        setUser(activeUser.data());
        await AsyncStorage.storeData("@userData", activeUser.data());
      }
    } catch (err) {
      console.log("Error fetching currently logged in user profile", err);
    }
  };

  const signup = async (email, password) => {
    setAuthLoading(true);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredentials?.user.uid;
      const curUser = { email, uid };
      await saveUserToDB(curUser);
      await AsyncStorage.storeData("@userData", { email, password });
    } catch (err) {
      console.log("An error occurred during sign up", err);
      handleFirebaseAuthErrors(err);
    } finally {
      setAuthLoading(false);
    }
  };

  const login = async (email, password) => {
    setAuthLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setFinished(true);
      await AsyncStorage.storeData("@userData", { email, password });
    } catch (err) {
      console.log("An error occurred during log in", err.message);
      handleFirebaseAuthErrors(err);
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    console.log("Signing out");
    try {
      await signOut(auth);
      await AsyncStorage.deleteDataFromStorage("@userData");
      setAuthenticated(false);
      console.log("User signed out successfully");
    } catch (err) {
      console.log("Error while signing out", err);
    }
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
