import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const AuthButton = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButon]}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#1B4A58",
    padding: 15,
    alignSelf: "center",
    borderRadius: 6,
  },

  disabledButon: {
    opacity: 0.5,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
});
