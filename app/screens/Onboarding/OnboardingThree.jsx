import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./style";

const OnboardingThree = ({ navigation }) => {
  return (
    <View style={[styles.onboarding, styles.onboardingDark]}>
      <Text style={[styles.skipText, styles.skipTextDark]}>Skip</Text>
      <View style={styles.onboardingImageContainer}>
        <Image
          source={require("./../../../assets/WebGroup.png")}
          style={styles.onboardingImageThree}
        />
      </View>
      <Text style={[styles.onboardingText, styles.onboardingTextDark]}>
        The future for you to save time and get best services
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={styles.onboardingIcon}
      >
        <Image source={require("./../../../assets/ArrowThree.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingThree;
