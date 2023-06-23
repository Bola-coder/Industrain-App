import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const SearchComponent = ({ imageSource, onIconPress, useIcon }) => {
  return (
    <View style={styles.search}>
      <View style={styles.searchInput}>
        <FontAwesomeIcon
          name="search"
          size={20}
          color={"black"}
          style={styles.icon}
        />
        <TextInput placeholder="Search" style={styles.input} />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onIconPress}
        style={styles.iconImageContainer}
      >
        {useIcon ? (
          <View style={styles.searchIcon}>
            <Icon name="search" color={"#FFF"} size={24} />
          </View>
        ) : (
          <Image source={imageSource} style={styles.searchImage} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 45,
  },

  searchInput: {
    flexBasis: "80%",
    position: "relative",
  },

  icon: {
    position: "absolute",
    top: 15,
    left: 10,
    opacity: 100,
  },

  input: {
    padding: 10,
    paddingLeft: 40,
    // borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#E3E9EC",
    // Amdroid border styles
    elevation: 1,
    // IOS border styles
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },

  iconImageContainer: {
    flexBasis: "15%",
  },

  searchIcon: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1B4A58",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  searchImage: {
    // width: "100%",
  },
});
