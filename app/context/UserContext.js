import React, { useState, useEffect, createContext, useContext } from "react";
import { db } from "../libraries/firebase";
import { storage } from "../libraries/firebase";
import {
  collection,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
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
    const { email, uid } = user || {};
    setUserDetails((prev) => ({ ...prev, email, uid }));
  }, [user]);

  const updateUserDetails = async (fields) => {
    setUserDetails((prev) => ({ ...prev, ...fields }));
    try {
      await AsyncStorage.storeData("@userDetails", {
        ...userDetails,
        ...fields,
      });
      console.log("User details updated in AsyncStorage");
    } catch (err) {
      console.log("Error updating user data", err);
    }
  };

  const getUserDetails = async (email) => {
    try {
      const details = await AsyncStorage.getObjectData("@userDetails");
      if (details) {
        // console.log("User details fetched from AsyncStorage", details);
        setUserDetails(details);
      } else {
        const userQuery = query(colRef, where("email", "==", email));
        const querySnapshot = await getDocs(userQuery);
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userDocRef = doc(colRef, userDoc.id);
          const docData = (await getDoc(userDocRef)).data();
          setUserDetails(docData);
          updateUserDetails(docData);
          // console.log("User details fetched from Firestore", docData);
        }
      }
    } catch (err) {
      console.log("Error fetching user details", err);
    }
  };

  const updateUserDetailsToDB = async (email, fields) => {
    const userQuery = query(colRef, where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);
    if (querySnapshot.empty) return;

    const userDoc = querySnapshot.docs[0];
    const userDocRef = doc(colRef, userDoc.id);

    try {
      const updatedDocSnapshot = await updateDoc(userDocRef, fields);
      // console.log(updatedDocSnapshot);
      // const updatedUserData = updatedDocSnapshot.data();

      // Set the userDetails state with the updated document data
      // setUserDetails(updatedUserData);
      console.log("Updated user details in Firestore");
    } catch (err) {
      console.log("Error updating user details", err);
    }
  };

  const clearUserDetails = async () => {
    setUserDetails(initialUserDetails);
    try {
      await AsyncStorage.deleteDataFromStorage("@userDetails");
      console.log("Cleared user details from AsyncStorage");
    } catch (err) {
      console.log("Error clearing user details from AsyncStorage", err);
    }
  };

  const uploadProfileImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    console.log(response);
    console.log(blob);

    const imageName = userDetails.email + "-" + Date.now() + ".jpg";
    const storageRef = ref(storage, "images/" + imageName);
    const uploadTask = uploadBytes(storageRef, blob);

    uploadTask
      .then((snapshot) => {
        console.log("Image uploaded!", snapshot);

        // You can retrieve the download URL for the uploaded image
        const downloadURL = snapshot.ref.getDownloadURL();
        console.log("Download URL:", downloadURL);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const values = {
    userDetails,
    updateUserDetails,
    getUserDetails,
    updateUserDetailsToDB,
    clearUserDetails,
    uploadProfileImage,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
