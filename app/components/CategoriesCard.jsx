import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";

const CategoriesCard = ({ category }) => {
  return (
    <TouchableOpacity style={styles.categoryCard} activeOpacity={0.8}>
      <View style={styles.categoryCardImg}>
        {/* <Image source={category.img} /> */}
        <MaterialIcon name={category.iconName} size={30} color="#1B4A58" />
      </View>
      <Text style={styles.categoryCardText}>{category.name}</Text>
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
