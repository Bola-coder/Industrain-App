import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";

const CategoriesCard = ({ category }) => {
  return (
    <TouchableOpacity style={styles.categoryCard} activeOpacity={0.8}>
      <View style={styles.categoryCardImg}>
        {/* <FontAwesomeIcon name="filter" size={30} /> */}
        <Image source={category.img} />
      </View>
      <Text style={styles.categoryCardText}>{category.text}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  categoryCard: {
    padding: 5,
    width: 100,
    height: 100,
    justifyContent: "center",
  },

  categoryCardImg: {
    padding: 10,
    backgroundColor: "#E3E9EC",
    alignItems: "center",
    borderRadius: 4,
  },

  categoryCardText: {
    alignSelf: "center",
    marginTop: 5,
  },
});
