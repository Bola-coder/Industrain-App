import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import ScreenHeader from "../../components/ScreenHeader";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome5";
import { useJobContext } from "../../context/JobContext";

// Component card for the Category
const MainCategoryCard = ({ iconName, text, subText, useFA }) => {
  return (
    <TouchableOpacity style={styles.categoryCard} activeOpacity={0.8}>
      {useFA ? (
        <FontAwesomeIcon name={iconName} size={60} color="#1B4A58" />
      ) : (
        <MaterialIcon name={iconName} size={50} color="#1B4A58" />
      )}
      <Text style={styles.categoryCardText}>{text}</Text>
      <Text style={styles.categoryCardSubText}>{subText}</Text>
    </TouchableOpacity>
  );
};

// Category Screen
const CategoryScreen = () => {
  const { getJobCategories, categories, loading } = useJobContext();
  useEffect(() => {
    const handleCategories = async () => {
      try {
        await getJobCategories();
      } catch (err) {
        // just to await the categories function being completed. No exceptions to catch
      }
    };
    handleCategories();
  }, []);

  return (
    <View style={styles.category}>
      {/* Screen Header */}
      <ScreenHeader title={"Category"} />

      {/* Category List */}
      {loading ? (
        <ActivityIndicator size={"large"} color={"#1B4A58"} />
      ) : (
        <FlatList
          data={categories}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.categoryCardContainer}>
              <MainCategoryCard
                iconName={item.iconName}
                text={item.name}
                subText={`${item.numberOfPlacements} Placements`}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.categoryContent}
        />
      )}
    </View>
  );
};

export default CategoryScreen;
