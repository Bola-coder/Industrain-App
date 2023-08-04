import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const ProposalScreen = ({ navigation }) => {
  return (
    <View style={styles.proposal}>
      <View style={styles.emptyImage}>
        <Image source={require("./../../../assets/EmptyProposal.png")} />
      </View>
      <View style={styles.emptyTextContainer}>
        <Text style={styles.emptyText}>Your application List is Empty</Text>
      </View>

      <TouchableOpacity
        style={styles.discoverCompany}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Company")}
      >
        <Text style={styles.discoverCompanyText}>Discover Company</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProposalScreen;
