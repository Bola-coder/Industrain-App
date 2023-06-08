import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  onboarding: {
    flex: 1,
    height: "100%",
    padding: 20,
  },

  skipText: {
    position: "absolute",
    right: 20,
    top: 40,
    fontSize: 20,
  },

  skipTextDark: {
    color: "#fff",
  },

  onboardingDark: {
    backgroundColor: "#1B4A58",
  },

  onboardingImageContainer: {
    height: "65%",
  },

  onboardingImage: {
    marginTop: 80,
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
    fontSize: 40,
    fontWeight: 700,
    color: "#333333",
  },

  onboardingTextDark: {
    color: "#fff",
    fontSize: 45,
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
