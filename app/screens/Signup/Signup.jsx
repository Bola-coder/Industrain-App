import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import Checkbox from "expo-checkbox";
import styles from "./style";
import AuthButton from "../../components/AuthButton";
import ErrorModal from "./../../components/ErrorModal";
import { useAuth } from "./../../context/AuthContext";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [showError, setShowError] = useState(false);
  const { signup, authLoading, authenticated, error, setError } = useAuth();

  const handleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };
  const handleSignup = () => {
    if (!email || !password) {
      setError("Please provide email and password");
      return;
    }
    signup(email, password);
    // navigation.navigate("StudentProfileSetting", { id: 0 });
  };

  useEffect(() => {
    if (authenticated) {
      setEmail("");
      setPassword("");
      navigation.navigate("StudentProfileSetting", { id: 0 });
    }
  }, [authenticated]);

  useEffect(() => {
    if (error) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [error]);

  const handleErrorModalClose = () => {
    setError(null);
  };

  return (
    <View style={styles.signup}>
      <View style={styles.signupHeader}>
        <Text style={styles.signupHeaderMain}>Sign up</Text>
        <Text style={styles.signupHeaderSub}>
          Fill the details and create your account
        </Text>
      </View>
      {/* Error Modal */}
      {showError && (
        <ErrorModal
          visible={true}
          messsage={error}
          handleClose={handleErrorModalClose}
        />
      )}
      {/* End of Error modal */}
      <View style={styles.signupForm}>
        <View style={styles.signupInputGroup}>
          <TextInput
            placeholder="Email"
            style={styles.signupInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={[styles.signupInputGroup]}>
          <TextInput
            placeholder="Password"
            secureTextEntry={hidePassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.signupInput}
            autoCapitalize="none"
          />
          <FontAwesomeIcon
            name={hidePassword ? "eye" : "eye-slash"}
            size={24}
            color={"#4F4F4F"}
            style={styles.signupInputIcon}
            onPress={handleHidePassword}
          />
        </View>
        <View style={styles.signupAgreement}>
          <Checkbox style={styles.signupAgreementCheckbox} />
          <Text style={styles.signupAgreementText}>
            I agree to the Term of services and Privacy Policy
          </Text>
        </View>
        <View style={styles.btn}>
          <AuthButton
            text={"Create Account"}
            onPress={handleSignup}
            disabled={authLoading}
          />
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
