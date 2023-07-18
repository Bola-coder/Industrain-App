import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./../StudentProfileSetting/style";
import { useUserContext } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import AppPicker from "../../components/AppPicker";
import AppDatePicker from "../../components/AppDatePicker";
import ScreenHeader from "../../components/ScreenHeader";

const PersonalInformationScreen = ({ navigation }) => {
  const { user } = useAuth();
  const {
    userDetails,
    updateUserDetails,
    getUserDetails,
    saveUserDetailsToDB,
  } = useUserContext();
  const [name, setName] = useState(userDetails.name);
  const [phone, setPhone] = useState(userDetails.phone);
  const [gender, setGender] = useState(userDetails.gender);
  const [address, setAddress] = useState(userDetails.address);
  const [dob, setDob] = useState(userDetails.dob);

  const handleSave = async () => {
    const fields = { name, phone, gender, address, dob };
    saveUserDetailsToDB(userDetails?.email, fields);
    navigation.navigate("Account");
  };

  return (
    <KeyboardAvoidingView
      style={styles.studentProfileSettings}
      contentContainerStyle={styles.studentProfileSettings}
      behavior="padding"
    >
      {/* Header */}
      <ScreenHeader title={"Personal Information"} />

      {/* The FOrm */}
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <TextInput
            placeholder="Full Name"
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            placeholder="Phone Number"
            style={styles.textInput}
            keyboardType="number-pad"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <AppPicker
            items={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            bgColor={"#E3E9EC"}
            prompt={"Gender"}
            defaultValue={gender}
            onPickerValueChange={(value) => {
              setGender(value);
            }}
          />
          <TextInput
            placeholder="Address"
            style={styles.textInput}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <AppDatePicker
            label={"DOB"}
            styles={styles}
            defaultValue={dob}
            onDateChange={(value) => setDob(value)}
          />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.7}
          onPress={handleSave}
        >
          <Text style={styles.submitButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PersonalInformationScreen;
