import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome5";
import StepIndicator from "react-native-step-indicator";
import { useUserContext } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import AppPicker from "../../components/AppPicker";
import AppDatePicker from "../../components/AppDatePicker";

const StudentProfileSetting = ({ navigation, route }) => {
  const {
    userDetails,
    updateUserDetails,
    getUserDetails,
    saveUserDetailsToDB,
  } = useUserContext();
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const { id } = route.params;

  const handleSave = async () => {
    if (id === 0) {
      const fieldOne = { name, phone, gender, address, dob };
      await updateUserDetails(fieldOne);
      navigation.navigate("StudentProfileSettingTwo", { id: 1 });
    } else if (id === 1) {
      const fieldTwo = { school, degree, course, level, passingYear };
      await updateUserDetails(fieldTwo);
      navigation.navigate("StudentProfileSettingThree", { id: 2 });
      // console.log(userDetails);
    } else {
      // console.log({ ...userDetails });
      const fields = { ...userDetails };
      console.log("Email I am saving to", userDetails?.email);
      saveUserDetailsToDB(userDetails?.email, fields);
      navigation.navigate("Main", { id: 2 });
    }
  };

  // Custom styles for the step indicator
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: "#1b4A58",
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: "#1B4A58",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#1b4A58",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#1B4A58",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#1B4A58",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "#1B4A58",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
    currentStepLabelColor: "#1B4A58",
  };

  return (
    <KeyboardAvoidingView
      style={styles.studentProfileSettings}
      contentContainerStyle={styles.studentProfileSettings}
      behavior="padding"
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backIcon}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon name="angle-left" size={20} color={"#FFF"} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Complete Profile</Text>
        <Text style={styles.skipText}>Skip</Text>
      </View>
      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={id}
          stepCount={3}
          renderStepIndicator={({ position, stepStatus }) => (
            <View
              style={{
                // backgroundColor: "#1B4A58",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon name="check" size={14} color={"#fff"} />
            </View>
          )}
        />
      </View>
      {/* The forms */}
      {id === 0 ? (
        <View style={styles.form}>
          <Text style={styles.formHeader}>Personal Information</Text>
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
              onDateChange={(value) => setDob(value)}
            />
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.7}
            onPress={handleSave}
          >
            <Text style={styles.submitButtonText}>Save and Continue</Text>
          </TouchableOpacity>
        </View>
      ) : id === 1 ? (
        <View style={styles.form}>
          <Text style={styles.formHeader}>Personal Information</Text>
          <View style={styles.formGroup}>
            <TextInput
              placeholder="Name of School"
              style={styles.textInput}
              value={school}
              onChangeText={(text) => setSchool(text)}
            />
            <AppPicker
              items={[
                { label: "BSC", value: "bsc" },
                { label: "HND", value: "hnd" },
                { label: "OND", value: "ond" },
              ]}
              bgColor={"#E3E9EC"}
              prompt={"School Degree"}
              onPickerValueChange={(value) => {
                setDegree(value);
              }}
            />
            <AppPicker
              items={[
                { label: "Computer Science", value: "computer_science" },
                { label: "Civil Engineering", value: "civil_engineering" },
              ]}
              bgColor={"#E3E9EC"}
              prompt={"Course"}
              onPickerValueChange={(value) => {
                setCourse(value);
              }}
            />
            <AppPicker
              items={[
                { label: "100 Level", value: "100l" },
                { label: "200 Level", value: "200l" },
                { label: "300 Level", value: "300l" },
                { label: "400 Level", value: "400l" },
                { label: "500 Level", value: "500l" },
              ]}
              bgColor={"#E3E9EC"}
              prompt={"Level"}
              onPickerValueChange={(value) => {
                setLevel(value);
              }}
            />
            <AppDatePicker
              label={"Passing Year"}
              styles={styles}
              onDateChange={(value) => setPassingYear(value)}
            />
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.7}
            onPress={handleSave}
          >
            <Text style={styles.submitButtonText}>Save and Continue</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.form}>
          <Text style={styles.formHeader}>Upload Document</Text>
          <View style={styles.uploadContainer}>
            <FontAwesomeIcon name="file" size={24} />
            <View style={styles.uploadText}>
              <Text style={styles.uploadTextMain}>Placement Letter</Text>
              <Text style={styles.uploadTextSub}>2mb</Text>
            </View>
          </View>
          <View style={styles.uploadContainer}>
            <FontAwesomeIcon name="file" size={24} />
            <View style={styles.uploadText}>
              <Text style={styles.uploadTextMain}>Attach Cover Letter</Text>
              <Text style={styles.uploadTextSub}>
                Upload 5mb max in doc or pdf
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.7}
            onPress={handleSave}
          >
            <Text style={styles.submitButtonText}>Save and Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default StudentProfileSetting;
