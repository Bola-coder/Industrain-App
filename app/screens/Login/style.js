import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  login: {
    padding: 20,
  },

  loginHeader: {
    paddingVertical: 10,
    marginTop: 20,
  },

  loginHeaderMain: {
    fontSize: 30,
    fontWeight: 700,
    color: "#1B4A58",
  },

  loginHeaderSub: {
    fontSize: 18,
  },

  loginForm: {
    marginTop: 20,
  },

  loginInputGroup: {
    position: "relative",
  },

  loginInput: {
    padding: 15,
    backgroundColor: "#E3E9EC",
    color: "#828282",
    fontSize: 20,
    marginVertical: 10,
    borderRadius: 6,
  },

  loginInputIcon: {
    position: "absolute",
    right: 20,
    top: 30,
  },

  forgotPassword: {
    marginVertical: 10,
  },

  forgotPasswordText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#1B4A58",
  },

  btn: {
    marginVertical: 20,
  },

  footText: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: 500,
    color: "#828282",
  },

  footTextLink: {
    color: "#1B4A58",
  },
});

export default styles;
