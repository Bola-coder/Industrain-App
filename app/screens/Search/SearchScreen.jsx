import { View, Text, ScrollView, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import ScreenHeader from "../../components/ScreenHeader";
import styles from "./style";
import SearchComponent from "../../components/SearchComponent";
import CompanyCard from "../../components/CompanyCard";
import AppModal from "../../components/AppModal";

const SearchScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const companies = [
    {
      id: 0,
      img: require("./../../../assets/nnpcImage.png"),
      name: "NNPC",
      location: "Port Harcourt",
      duration: "Industrial Training (6 months)",
      role: "Water Management",
    },
    {
      id: 1,
      img: require("./../../../assets/tvcImage.png"),
      name: "TVC",
      location: "Lagos",
      duration: "Industrial Training (6 months)",
      role: "Desktop Support",
    },
    {
      id: 2,
      img: require("./../../../assets/breweriesImage.png"),
      name: "Nigeria Breweries",
      location: "Abeokuta",
      duration: "Industrial Training (1 year)",
      role: "Sales Assitant",
    },
    {
      id: 3,
      img: require("./../../../assets/nnpcImage.png"),
      name: "NNPC",
      location: "Port Harcourt",
      duration: "Industrial Training (6 months)",
      role: "Water Management",
    },
    {
      id: 4,
      img: require("./../../../assets/tvcImage.png"),
      name: "TVC",
      location: "Lagos",
      duration: "Industrial Training (6 months)",
      role: "Desktop Support",
    },
    {
      id: 5,
      img: require("./../../../assets/breweriesImage.png"),
      name: "Nigeria Breweries",
      location: "Abeokuta",
      duration: "Industrial Training (1 year)",
      role: "Sales Assitant",
    },
  ];
  return (
    <View style={styles.search}>
      <ScreenHeader />
      <View style={styles.searchInputContainer}>
        <SearchComponent
          imageSource={require("./../../../assets/Filter.png")}
          onIconPress={() => setModalVisible(true)}
        />
      </View>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.searchResultContainer}
      >
        <View style={styles.searchTextContainer}>
          <Text style={styles.searchText}>50 Placement Opportunity</Text>
        </View>
        {companies.map((item) => (
          <View key={item.id}>
            <CompanyCard
              img={item.img}
              name={item.name}
              location={item.location}
              duration={item.duration}
              role={item.role}
            />
          </View>
        ))}
      </ScrollView>
      <AppModal visible={modalVisible} setVisible={setModalVisible} />
    </View>
  );
};

export default SearchScreen;
