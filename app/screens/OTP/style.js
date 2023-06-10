import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  otp: {
    paddingHorizontal: 20,
    flex: 1,
    // alignItems: "center",
    height: "100%",
  },

  otpImage: {
    alignSelf: "center",
    marginTop: 40,
  },

  otpHeader: {
    padding: 10,
    marginTop: 20,
  },

  otpHeaderTextMain: {
    fontSize: 30,
    fontWeight: 700,
    textAlign: "center",
    color: "#333333",
  },

  otpHeaderTextSub: {
    fontSize: 20,
    padding: 10,
    textAlign: "center",
  },

  otpInputContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30,
    alignSelf: "center",
  },

  otpInputGroup: {
    width: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  otpInput: {
    fontSize: 30,
  },

  otpFooter: {
    marginTop: 10,
    alignSelf: "center",
  },

  otpFooterTextMain: {
    fontSize: 20,
    color: "#343434",
  },

  otpFooterTextSub: {
    color: "#1B4A58",
  },

  btn: {
    marginVertical: 20,
  },
});

export default styles;
