import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  signup: {
    padding: 20,
    backgroundColor: "#fff",
    height: "100%",
  },

  signupHeader: {
    paddingVertical: 10,
    marginTop: 20,
  },

  signupHeaderMain: {
    fontSize: 30,
    fontWeight: 700,
    color: "#1B4A58",
  },

  signupHeaderSub: {
    fontSize: 18,
  },

  signupForm: {
    marginTop: 20,
  },

  signupInputGroup: {
    position: "relative",
  },

  signupInput: {
    padding: 15,
    backgroundColor: "#E3E9EC",
    color: "#828282",
    fontSize: 20,
    marginVertical: 10,
    borderRadius: 6,
  },

  signupInputIcon: {
    position: "absolute",
    right: 20,
    top: 30,
  },

  signupAgreement: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  signupAgreementCheckbox: {
    width: 30,
    flexBasis: "6%",
  },

  signupAgreementText: {
    flexBasis: "90%",
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
