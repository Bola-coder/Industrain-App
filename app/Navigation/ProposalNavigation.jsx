import { View, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProposalScreen from "../screens/Proposals/AppliedProposal";
import ScreenHeader from "../components/ScreenHeader";

const ProposalNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.proposalContainer}>
      <View style={styles.proposalHeader}>
        <ScreenHeader title={"Proposals"} darkMode={true} />
      </View>
      <Tab.Navigator
        initialRouteName="Applied"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#1B4A58",
            // paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 500,
          },
          tabBarActiveTintColor: "#BCD195",
          tabBarInactiveTintColor: "#fff",
          tabBarIndicatorStyle: {
            color: "red",
          },
          tabBarPressColor: "#E3E9EC",
          tabBarPressOpacity: 0.8,
        }}
      >
        <Tab.Screen name="Applied" component={ProposalScreen} />
        <Tab.Screen name="Contacted" component={ProposalScreen} />
        <Tab.Screen name="Saved" component={ProposalScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default ProposalNavigation;

const styles = StyleSheet.create({
  proposalContainer: {
    flex: 1,
    backgroundColor: "#1B4A58",
  },

  proposalHeader: {
    padding: 10,
  },
});
