import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../libraries/firabse";
import { collection, getDocs } from "firebase/firestore";
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

  const getJobCategories = () => {
    setCategories([]);
    setLoading(true);
    getDocs(categoryColRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (!categories.includes(doc.data())) {
            setCategories((prev) => [...prev, doc.data()]);
          }
        });
      })
      .catch((err) => {
        console.error("Error while fetching categories from firebase", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const values = {
    getJobCategories,
    categories,
    loading,
  };

  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default JobProvider;
