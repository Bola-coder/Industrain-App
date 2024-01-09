import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useUserContext } from "../context/UserContext";

const UseImagePicker = () => {
  const [image, setImage] = useState(null);
  const { uploadProfileImage } = useUserContext();
  let resultUri = "";

  const pickImage = async () => {
    console.log("Heyyy");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uploadProfileImage(result.assets[0].uri);
    }
  };

  return [image, pickImage, resultUri];
};

export default UseImagePicker;
