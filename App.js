import {
  Platform,
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./app/screens/Onboarding/Onboarding";
import OnboardingTwo from "./app/screens/Onboarding/OnboardingTwo";
import OnboardingThree from "./app/screens/Onboarding/OnboardingThree";
import Signup from "./app/screens/Signup/Signup";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingTwo"
            component={OnboardingTwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingThree"
            component={OnboardingThree}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
