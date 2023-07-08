import React, {
  useState,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from "react";
import { db } from "../libraries/firabse";
import {
  collection,
  doc,
  updateDoc,
  query,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";
import AsyncStorage from "./../utils/AsyncStorage";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const colRef = collection(db, "users");
  const { user } = useAuth();

  const initialUserDetails = {
    email: "",
    uid: "",
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
  };
  const [userDetails, setUserDetails] = useState(initialUserDetails);

  useEffect(() => {
    const email = user?.email;
    const uid = user?.uid;
    setUserDetails((prev) => {
      return { ...prev, ...{ email, uid } };
    });
  }, [user]);

  //   Function to handle update of user Data to AsyncStorage
  const updateUserDetails = async (fields) => {
    setUserDetails((prev) => {
      return { ...prev, ...fields };
    });
    try {
      await AsyncStorage.storeData("@userDetails", userDetails);
      console.log("User details updated in localStorage");
    } catch (err) {
      console.log("Error while updating user data", err);
    }
  };

  //   Function to get userDetails from firebase and save to AsyncStorage
  const getUserDetails = async (email) => {
    try {
      const details = await AsyncStorage.getObjectData("@userDetails");
      if (details) {
        setUserDetails(details);
        console.log("User data gotten!!!");
      } else {
        const userQuery = query(colRef, where("email", "==", email));
        const querySnapshot = await getDocs(userQuery);
        const userDoc = querySnapshot.docs[0];
        const userDocRef = doc(colRef, userDoc.id);
        getDoc(userDocRef)
          .then((doc) => {
            console.log("The user data is....", doc.data());
            setUserDetails(doc.data());
            updateUserDetails(doc.data());
          })
          .catch((err) => {
            console.log("Error", err);
          });
      }
    } catch (err) {
      console.log("Error while fetching user details");
    }
  };

  //   Function to save user details to firebase
  const saveUserDetailsToDB = async (email, fields) => {
    const userQuery = query(colRef, where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);
    if (querySnapshot.empty) {
      console.log("User document not found");
      return;
    }

    const userDoc = querySnapshot.docs[0]; // Assuming there is only one matching user document
    const userDocRef = doc(colRef, userDoc.id);

    try {
      const userSnapShot = await updateDoc(userDocRef, {
        name: fields.name,
        phone: fields.phone,
        gender: fields.gender,
        address: fields.address,
        dob: fields.dob,
        school: fields.school,
        degree: fields.degree,
        course: fields.course,
        level: fields.level,
        passingYear: fields.passingYear,
      });
      console.log("Done updating firestore");
      //   await AsyncStorage.deleteDataFromStorage("@userDetails")
    } catch (err) {
      console.log("Error when updating user details", err);
    }
  };

  const clearUserDetails = async () => {
    setUserDetails({
      email: "",
      uid: "",
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
    });
    try {
      await AsyncStorage.deleteDataFromStorage("@userDetails");
      console.log("Cleared user details from storage already");
    } catch (err) {
      console.log("Errro clearing user details from storage", err);
    }
  };

  const values = {
    updateUserDetails,
    userDetails,
    getUserDetails,
    saveUserDetailsToDB,
    clearUserDetails,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
