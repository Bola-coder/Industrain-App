import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../screens/Home/HomeScreen";
import AccountScreen from "../screens/Account/AccountScreen";
import ProposalScreen from "../screens/Proposals/AppliedProposal";
import ChatScreen from "../screens/Chats/ChatScreen";
import ProposalNavigation from "./ProposalNavigation";

const Tab = createBottomTabNavigator();
const TabContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;
          if (routeName == "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
            size = focused ? 26 : 24;
          } else if (routeName === "Proposals") {
            iconName = focused ? "download" : "download-outline";
            size = focused ? 26 : 24;
          } else if (routeName === "Chats") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
            size = focused ? 26 : 24;
          } else if (routeName === "Account") {
            iconName = focused ? "person" : "person-outline";
            size = focused ? 26 : 24;
          }
          return <IonIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1B4A58",
        tabBarActiveBackgroundColor: "#FFF",
        tabBarInactiveBackgroundColor: "#FFF",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          marginBottom: 0,
          paddingBottom: 5,
          //   borderRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Proposals"
        component={ProposalNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "Proposals",
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Chats",
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabContainer;
