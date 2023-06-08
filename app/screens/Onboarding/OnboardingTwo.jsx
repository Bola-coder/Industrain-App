import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./style";

const OnboardingTwo = ({ navigation }) => {
  return (
    <View style={styles.onboarding}>
      <Text style={styles.skipText}>Skip</Text>
      <View style={styles.onboardingImageContainer}>
        <Image
          source={require("./../../../assets/GroupOfPeople.png")}
          style={styles.onboardingImageTwo}
        />
      </View>
      <Text style={styles.onboardingText}>Discover your worker</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("OnboardingThree")}
        style={styles.onboardingIcon}
      >
        <Image source={require("./../../../assets/ArrowTwo.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingTwo;
