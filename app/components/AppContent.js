import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./../screens/Onboarding/Onboarding";
import OnboardingTwo from "./../screens/Onboarding/OnboardingTwo";
import OnboardingThree from "./../screens/Onboarding/OnboardingThree";
import Signup from "./../screens/Signup/Signup";
import Login from "./../screens/Login/Login";
import ForgetPassword from "./../screens/ForgetPassword/ForgetPassword";
import CreateNewPassword from "./../screens/CreateNewPassword/CreateNewPassword";
import OTPScreen from "./../screens/OTP/OTPScreen";
import JoinUs from "./../screens/JoinUs/JoinUs";
import StudentProfileSetting from "./../screens/StudentProfileSetting/StudentProfileSetting";
import TabContainer from "../Navigation/TabContainer";
import SearchScreen from "./../screens/Search/SearchScreen";
import CategoryScreen from "./../screens/Category/CategoryScreen";
import CompanyScreen from "../screens/Company/CompanyScreen";
import PersonalInformationScreen from "../screens/PersonalInformation/PersonalInformationScreen";
import SplashScreen from "../screens/Spalsh/SplashScreen";
import EducationalInformationUpdate from "./../screens/EducationalInformation/EducationalInformationUpdateScreen";

const AppContent = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName={"SplashScreen"}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
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
          name="StudentProfileSettingTwo"
          component={StudentProfileSetting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentProfileSettingThree"
          component={StudentProfileSetting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Company"
          component={CompanyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EducationalInformation"
          component={EducationalInformationUpdate}
          options={{ headerShown: false }}
        />

        {/* Main Tab Screens */}
        <Stack.Screen
          name="Main"
          component={TabContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="dark" backgroundColor="#FFF" />
    </SafeAreaView>
  );
};

export default AppContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
