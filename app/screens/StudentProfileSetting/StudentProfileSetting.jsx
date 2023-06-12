import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome5";
import StepIndicator from "react-native-step-indicator";

const StudentProfileSetting = ({ navigation }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
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

  const handleNextStep = () => {
    if (currentPosition < 2) {
      setCurrentPosition((prev) => prev + 1);
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.studentProfileSettings}
      contentContainerStyle={styles.studentProfileSettings}
      behavior="padding"
    >
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
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
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
      <View style={styles.form}>
        <Text style={styles.formHeader}>Personal Information</Text>
        <View style={styles.formGroup}>
          <TextInput placeholder="Full Name" style={styles.textInput} />
          <TextInput placeholder="Phone Number" style={styles.textInput} />
          <TextInput placeholder="Gender" style={styles.textInput} />
          <TextInput placeholder="Address" style={styles.textInput} />
          <TextInput placeholder="DOB" style={styles.textInput} />
        </View>
      </View>
      <TouchableOpacity style={styles.submitButton} activeOpacity={0.7}>
        <Text style={styles.submitButtonText}>Save and Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default StudentProfileSetting;