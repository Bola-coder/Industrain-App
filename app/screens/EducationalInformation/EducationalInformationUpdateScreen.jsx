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
  const { userDetails, updateUserDetails, saveUserDetailsToDB } =
    useUserContext();
  const [school, setSchool] = useState(userDetails.school);
  const [degree, setDegree] = useState(userDetails.degree);
  const [course, setCourse] = useState(userDetails.course);
  const [level, setLevel] = useState(userDetails.level);
  const [passingYear, setPassingYear] = useState(userDetails.passingYear);

  const handleSave = async () => {
    const fields = { school, degree, course, level, passingYear };
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
      <ScreenHeader title={"Educational Information"} />

      {/* The Form */}
      <View style={styles.form}>
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
            defaultValue={degree}
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
            defaultValue={course}
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
            defaultValue={level}
            onPickerValueChange={(value) => {
              setLevel(value);
            }}
          />
          <AppDatePicker
            label={"Passing Year"}
            styles={styles}
            defaultValue={passingYear}
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
    </KeyboardAvoidingView>
  );
};

export default PersonalInformationScreen;
