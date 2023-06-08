import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./../Login/style";
import AuthButton from "../../components/AuthButton";

const ForgetPassword = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("CreateNewPassword");
  };
  return (
    <View style={styles.login}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderMain}>Forget Password</Text>
        <Text style={styles.loginHeaderSub}>
          Enter the email asssociated with this account
        </Text>
      </View>
      <View style={styles.loginForm}>
        <View style={styles.loginInputGroup}>
          <TextInput placeholder="Email" style={styles.loginInput} />
        </View>
        <View style={styles.btn}>
          <AuthButton text={"Recover Password"} onPress={handlePress} />
        </View>
      </View>
    </View>
  );
};

export default ForgetPassword;
