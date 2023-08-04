import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  onboarding: {
    flex: 1,
    height: "100%",
    padding: 20,
  },

  skipTextContainer: {
    position: "relative", // Relative positioning for the parent container
    width: "100%",
    height: "20%",
    height: "8%",
  },

  skipTextButton: {
    position: "absolute",
    right: 10,
    top: 20,
    padding: 5,
  },

  skipText: {
    fontSize: 24,
    color: "#828282",
  },

  skipTextDark: {
    color: "#fff",
  },

  onboardingDark: {
    backgroundColor: "#1B4A58",
  },

  onboardingImageContainer: {
    height: "60%",
  },

  onboardingImage: {
    marginTop: 20,
  },

  onboardingImageTwo: {
    marginTop: "40%",
    marginLeft: "10%",
  },

  onboardingImageThree: {
    marginTop: "30%",
  },

  onboardingText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: 700,
    color: "#333333",
  },

  onboardingTextDark: {
    color: "#fff",
    fontSize: 35,
    marginTop: 20,
  },

  onboardingIcon: {
    alignSelf: "center",
    marginTop: 40,
    width: 80,
    position: "absolute",
    bottom: 50,
  },
});

export default styles;
