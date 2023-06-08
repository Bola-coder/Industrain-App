import { View, Text, TextInput } from "react-native";
import React from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import styles from "./../Login/style";
import AuthButton from "../../components/AuthButton";

const CreateNewPassword = ({ navigation }) => {
  return (
    <View style={styles.login}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderMain}>Create New Password</Text>
        <Text style={styles.loginHeaderSub}>
          Your new password must be different from the previously used password
        </Text>
      </View>
      <View style={styles.loginForm}>
        <View style={[styles.loginInputGroup]}>
          <TextInput
            placeholder="New Password"
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
        <View style={[styles.loginInputGroup]}>
          <TextInput
            placeholder="Confirm New Password"
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
        <View style={styles.btn}>
          <AuthButton text={"Recover Password"} />
        </View>
      </View>
    </View>
  );
};

export default CreateNewPassword;
