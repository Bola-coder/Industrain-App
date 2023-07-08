import { View, Text, Image, Alert } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import SearchComponent from "../../components/SearchComponent";
import { TouchableOpacity } from "react-native";
import CategoriesCard from "../../components/CategoriesCard";
import { ScrollView } from "react-native";
import CompanyCard from "../../components/CompanyCard";
import { useAuth } from "../../context/AuthContext";
import { useUserContext } from "../../context/UserContext";

// HomeScreen
const HomeScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const { userDetails, clearUserDetails, getUserDetails } = useUserContext();

  const categories = [
    {
      img: require("./../../../assets/scienceIcon.png"),
      text: "Science",
    },
    {
      img: require("./../../../assets/artIcon.png"),
      text: "Art",
    },
    {
      img: require("./../../../assets/engineeringIcon.png"),
      text: "Engineering",
    },
    {
      img: require("./../../../assets/bankingIcon.png"),
      text: "Finance",
    },
    {
      img: require("./../../../assets/scienceIcon.png"),
      text: "Agric",
    },
  ];

  const topCompanies = [
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
  ];

  useEffect(() => {
    getUserDetails(user?.email);
  }, [user]);

  // HandleSearch function
  const handleSearch = () => {
    navigation.navigate("Search");
  };

  const handleLogout = async () => {
    await logout();
    clearUserDetails();
    Alert.alert("Signout successful");
    navigation.navigate("Login");
  };
  return (
    <ScrollView style={styles.home}>
      {/* Header */}
      <View style={styles.homeHeader}>
        <View style={styles.homeHeaderText}>
          <Text style={styles.homeHeaderTextMain}>Hello 👋</Text>
          <Text style={styles.homeHeaderTextInner}>{userDetails?.name}</Text>
        </View>
        <Image source={require("./../../../assets/Notification.png")} />
      </View>

      {/* Input */}
      <View style={styles.inputContainer}>
        <SearchComponent useIcon={true} onIconPress={handleSearch} />
      </View>

      {/* CTA */}
      <View style={styles.homeCTA}>
        <View style={styles.homeCTAContent}>
          <Text style={styles.homeCTAText}>
            Find companies you want for Industrial Training
          </Text>
          <TouchableOpacity style={styles.homeCTABtn} activeOpacity={0.7}>
            <Text style={styles.homeCTABtnText} onPress={handleLogout}>
              Explore
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.homeCTAImageContainer}>
          <Image source={require("./../../../assets/studentImage.png")} />
        </View>
      </View>

      {/* Categories */}
      <View style={styles.category}>
        <View style={styles.componentHeader}>
          <Text style={styles.componentHeaderText}>Categories</Text>
          <TouchableOpacity
            style={styles.componentHeaderLink}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Category")}
          >
            <Text style={styles.componentHeaderLinkText}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <View key={index}>
              <CategoriesCard category={category} />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Companies */}
      <View style={styles.company}>
        <View style={styles.componentHeader}>
          <Text style={styles.componentHeaderText}>Top Companies</Text>
          <TouchableOpacity
            style={styles.componentHeaderLink}
            activeOpacity={0.7}
          >
            <Text style={styles.componentHeaderLinkText}>See all</Text>
          </TouchableOpacity>
        </View>
        {/* <FlatList
          data={topCompanies}
          renderItem={({ item }) => (
            <CompanyCard
              img={item.img}
              name={item.name}
              location={item.location}
              duration={item.duration}
              role={item.role}
            />
          )}
          contentContainerStyle={{
            paddingTop: 20,
          }}
          keyExtractor={(item) => item.id}
        /> */}
        {topCompanies.map((item) => (
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
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
