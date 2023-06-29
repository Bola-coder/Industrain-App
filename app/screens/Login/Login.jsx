import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import styles from "./style";
import AuthButton from "../../components/AuthButton";
import ErrorModal from "./../../components/ErrorModal";
import { useAuth } from "./../../context/AuthContext";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [showError, setShowError] = useState(false);
  const { login, authLoading, authenticated, error, setError } = useAuth();

  const handleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };
  const handleLogin = () => {
    if (!email || !password) {
      setError("Please provide email and password");
      return;
    }
    login(email, password);
  };

  useEffect(() => {
    if (authenticated) {
      setEmail("");
      setPassword("");
      navigation.navigate("Main");
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
    <View style={styles.login}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderMain}>Welcome Back</Text>
        <Text style={styles.loginHeaderSub}>Login to continue</Text>
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
      <View style={styles.loginForm}>
        <View style={styles.loginInputGroup}>
          <TextInput
            placeholder="Email"
            style={styles.loginInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={[styles.loginInputGroup]}>
          <TextInput
            placeholder="Password"
            secureTextEntry={hidePassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.loginInput}
            autoCapitalize="none"
          />
          <FontAwesomeIcon
            name="eye"
            size={24}
            color={"#4F4F4F"}
            style={styles.loginInputIcon}
            onPress={handleHidePassword}
          />
        </View>
        <View style={styles.forgotPassword}>
          <Text
            style={styles.forgotPasswordText}
            onPress={() => navigation.navigate("ForgetPassword")}
          >
            Forget Password
          </Text>
        </View>
        <View style={styles.btn}>
          <AuthButton
            text={"Login"}
            onPress={handleLogin}
            disabled={authLoading}
          />
        </View>
      </View>
      <Text style={styles.footText}>
        Don't have an account?{" "}
        <Text
          style={styles.footTextLink}
          onPress={() => navigation.navigate("Signup")}
        >
          Register here
        </Text>
      </Text>
    </View>
  );
};

export default Login;
