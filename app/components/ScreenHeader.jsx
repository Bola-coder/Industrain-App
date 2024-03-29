import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ScreenHeader = ({ title, darkMode }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[styles.backIcon, darkMode && darkStyle.backIcon]}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <FontAwesomeIcon
          name="angle-left"
          size={24}
          color={darkMode ? "#1B5A58" : "#FFF"}
        />
      </TouchableOpacity>
      <Text style={[styles.headerText, darkMode && darkStyle.darkHeaderText]}>
        {title}
      </Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  backIcon: {
    backgroundColor: "#1B5A58",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 500,
    flex: 4,
    textAlign: "center",
  },

  //   skipText: {
  //     fontSize: 20,
  //   },
});

const darkStyle = StyleSheet.create({
  backIcon: {
    backgroundColor: "#FFF",
  },

  darkHeaderText: {
    color: "#fff",
  },
});
