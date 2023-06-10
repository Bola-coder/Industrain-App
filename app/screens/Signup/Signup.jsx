import { View, Text, TextInput } from "react-native";
import React from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import Checkbox from "expo-checkbox";
import styles from "./style";
import AuthButton from "../../components/AuthButton";

const Signup = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("OTP");
  };
  return (
    <View style={styles.signup}>
      <View style={styles.signupHeader}>
        <Text style={styles.signupHeaderMain}>Sign up</Text>
        <Text style={styles.signupHeaderSub}>
          Fill the details and create your account
        </Text>
      </View>
      <View style={styles.signupForm}>
        <View style={styles.signupInputGroup}>
          <TextInput placeholder="Email" style={styles.signupInput} />
        </View>
        <View style={[styles.signupInputGroup]}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.signupInput}
          />
          <FontAwesomeIcon
            name="eye"
            size={24}
            color={"#4F4F4F"}
            style={styles.signupInputIcon}
          />
        </View>
        <View style={styles.signupAgreement}>
          <Checkbox style={styles.signupAgreementCheckbox} />
          <Text style={styles.signupAgreementText}>
            I agree to the Term of services and Privacy Policy
          </Text>
        </View>
        <View style={styles.btn}>
          <AuthButton text={"Create Account"} onPress={handlePress} />
        </View>
      </View>
      <Text style={styles.footText}>
        Already have an account?{" "}
        <Text
          style={styles.footTextLink}
          onPress={() => navigation.navigate("Login")}
        >
          Login here
        </Text>
      </Text>
    </View>
  );
};

export default Signup;
