import { View, Text, TextInput } from "react-native";
import React from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import styles from "./style";
import AuthButton from "../../components/AuthButton";

const Login = ({ navigation }) => {
  return (
    <View style={styles.login}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderMain}>Welcome Back</Text>
        <Text style={styles.loginHeaderSub}>Login to continue</Text>
      </View>
      <View style={styles.loginForm}>
        <View style={styles.loginInputGroup}>
          <TextInput placeholder="Email" style={styles.loginInput} />
        </View>
        <View style={[styles.loginInputGroup]}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.loginInput}
          />
          <FontAwesomeIcon
            name="eye"
            size={24}
            color={"#4F4F4F"}
            style={styles.loginInputIcon}
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
          <AuthButton text={"Login"} />
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
