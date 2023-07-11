import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "../utils/AsyncStorage";
import { useAuth } from "../context/AuthContext";
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
import TabContainer from "./TabContainer";
import SearchScreen from "./../screens/Search/SearchScreen";
import CategoryScreen from "./../screens/Category/CategoryScreen";
import CompanyScreen from "../screens/Company/CompanyScreen";

const AppContent = () => {
  const Stack = createNativeStackNavigator();
  const { user, setUser } = useAuth();
  const [initialRouteName, setInitialRouteName] = useState("Main");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const res = await AsyncStorage.getData("@userData");
        console.log(res);
        if (res !== null && res !== undefined && res !== "") {
          setLoggedIn(true);
          setUser(JSON.parse(res));
          setInitialRouteName("Main");
        } else {
          setInitialRouteName("Onboarding");
        }
      } catch (err) {
        console.log(err);
      }
      console.log(loggedIn);
    };
    getLoggedInUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName={initialRouteName}>
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

        {/* Main Tab Screens */}
        <Stack.Screen
          name="Main"
          component={TabContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AppContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
