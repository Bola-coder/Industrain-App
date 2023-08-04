import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./style";

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.onboarding} onPress={() => console.log("hey")}>
      <View style={styles.skipTextContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.skipTextButton}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.onboardingImageContainer}>
        <Image
          source={require("./../../../assets/woman.png")}
          style={styles.onboardingImage}
        />
      </View>
      <Text style={styles.onboardingText}>
        Discover thousand of organisation
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("OnboardingTwo")}
        style={styles.onboardingIcon}
      >
        <Image source={require("./../../../assets/ArrowOne.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;
