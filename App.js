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
import Login from "./app/screens/Login/Login";
import ForgetPassword from "./app/screens/ForgetPassword/ForgetPassword";
import CreateNewPassword from "./app/screens/CreateNewPassword/CreateNewPassword";
import OTPScreen from "./app/screens/OTP/OTPScreen";
import JoinUs from "./app/screens/JoinUs/JoinUs";
import StudentProfileSetting from "./app/screens/StudentProfileSetting/StudentProfileSetting";
import HomeScreen from "./app/screens/Home/HomeScreen";
import TabContainer from "./app/components/TabContainer";
import SearchScreen from "./app/screens/Search/SearchScreen";
import AuthProvider from "./app/context/AuthContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthProvider>
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
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateNewPassword"
              component={CreateNewPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTP"
              component={OTPScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JoinUS"
              component={JoinUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudentProfileSetting"
              component={StudentProfileSetting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{ headerShown: false }}
            />
            {/* Main Tab Screens */}
            <Stack.Screen
              name="Main"
              component={TabContainer}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </AuthProvider>
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
