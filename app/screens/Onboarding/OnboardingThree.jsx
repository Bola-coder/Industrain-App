import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./style";

const OnboardingThree = ({ navigation }) => {
  return (
    <View style={[styles.onboarding, styles.onboardingDark]}>
      <View style={styles.skipTextContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.skipTextButton}
        >
          <Text style={[styles.skipText, styles.skipTextDark]}>Skip</Text>
        </TouchableOpacity>
      </View>
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
