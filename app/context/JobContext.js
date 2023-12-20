import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../libraries/firebase";
import { collection, getDocs } from "firebase/firestore";
import { set } from "react-native-reanimated";
const JobContext = createContext();

export const useJobContext = () => {
  return useContext(JobContext);
};

const JobProvider = ({ children }) => {
  const categoryColRef = collection(db, "categories");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // getJobCategories();
  }, []);

  const getJobCategories = async () => {
    setCategories([]);
    setLoading(true);
    try {
      const categorySnapshot = await getDocs(categoryColRef);
      const categoryList = categorySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoryList);
      setLoading(false);
    } catch (error) {
      console.log("Error getting category documents: ", error);
      setLoading(false);
    }
  };

  const values = {
    getJobCategories,
    categories,
    loading,
  };

  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default JobProvider;
