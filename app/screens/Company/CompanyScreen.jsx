import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import ScreenHeader from "../../components/ScreenHeader";
import CompanyCard from "../../components/CompanyCard";

const CompanyScreen = () => {
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
      img: require("./../../../assets/nnpcImage.png"),
      name: "NNPC",
      location: "Port Harcourt",
      duration: "Industrial Training (6 months)",
      role: "Water Management",
    },
    {
      id: 5,
      img: require("./../../../assets/tvcImage.png"),
      name: "TVC",
      location: "Lagos",
      duration: "Industrial Training (6 months)",
      role: "Desktop Support",
    },
    {
      id: 6,
      img: require("./../../../assets/breweriesImage.png"),
      name: "Nigeria Breweries",
      location: "Abeokuta",
      duration: "Industrial Training (1 year)",
      role: "Sales Assitant",
    },
    {
      id: 7,
      img: require("./../../../assets/nnpcImage.png"),
      name: "NNPC",
      location: "Port Harcourt",
      duration: "Industrial Training (6 months)",
      role: "Water Management",
    },
  ];

  return (
    <View style={styles.company}>
      <ScreenHeader title={"Company"} />
      <ScrollView
        contentContainerStyle={styles.comopanyContent}
        showsVerticalScrollIndicator={false}
      >
        {companies.map((company) => (
          <View key={company.id}>
            <CompanyCard
              img={company.img}
              name={company.name}
              location={company.location}
              duration={company.duration}
              role={company.role}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CompanyScreen;
