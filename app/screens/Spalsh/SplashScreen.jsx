import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { useAuth } from "../../context/AuthContext";
import AsyncStorage from "../../utils/AsyncStorage";

const SplashScreen = ({ navigation }) => {
  const { user, setUser } = useAuth();
  const translateX = useSharedValue(-300);

  const AnimationStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  function animateSplashScreen() {
    return (translateX.value = withTiming(0, { duration: 2000 }));
  }

  useEffect(() => {
    animateSplashScreen();
    const getLoggedInUser = async () => {
      try {
        const res = await AsyncStorage.getObjectData("@userData");
        if (res !== null && res !== undefined && res !== "") {
          setUser(res);
          setTimeout(() => {
            navigation.replace("Main");
          }, 3000);
        } else {
          setTimeout(() => {
            navigation.replace("Onboarding");
          }, 3000);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getLoggedInUser();
  }, []);

  return (
    <Animated.View style={styles.splash}>
      <Animated.View style={[styles.splash, AnimationStyles]}>
        <Text style={styles.splashText}>
          Indus<Text style={styles.splashSubText}>trian</Text>
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  splashText: {
    fontSize: 50,
    fontWeight: 800,
    color: "#1B4A58",
  },

  splashSubText: {
    color: "#BCD195",
  },
});
