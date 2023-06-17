import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/Ionicons";

const CompanyCard = ({ img, name, location, duration, role }) => {
  return (
    <View style={styles.companyCard}>
      <View style={styles.companyCardImgContainer}>
        <Image source={img} style={styles.companyCardImg} />
      </View>
      <View style={styles.companyCardContent}>
        <Text style={styles.companyName}>{name}</Text>
        <Text style={styles.companyLocation}>{location}</Text>
        <View style={styles.ITDuration}>
          <View style={styles.ITDurationIconContainer}>
            <Icon
              name="trending-up"
              size={12}
              color={"#FFF"}
              style={styles.ITDurationIcon}
              Icon
            />
          </View>
          <Text style={styles.ITDurationText}>{duration}</Text>
        </View>
        <View style={styles.ITRole}>
          <View style={styles.ITRoleIconContainer}>
            <Icon
              name="checkmark"
              size={12}
              color={"#FFF"}
              style={styles.ITRoleIcon}
            />
          </View>
          <Text style={styles.ITRoleText}>{role}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
        <Text style={styles.btnText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CompanyCard;

const styles = StyleSheet.create({
  companyCard: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
  },

  companyCardImgContainer: {
    flexBasis: "20%",
  },

  companyCardImg: {
    width: "80%",
    height: "40%",
  },

  companyCardContent: {
    paddingHorizontal: 5,
  },

  companyName: {
    fontSize: 20,
    fontWeight: 600,
    color: "#333333",
  },

  companyLocation: {
    fontSize: 16,
    fontWeight: 400,
    color: "#333333",
  },

  ITDuration: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },

  ITDurationIconContainer: {
    backgroundColor: "#1B4A58",
    height: 24,
    width: 24,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  ITDurationText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#333333",
  },

  ITRole: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },

  ITRoleIconContainer: {
    backgroundColor: "#1B4A58",
    height: 24,
    width: 24,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  ITRoleText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#333333",
  },

  btn: {
    position: "absolute",
    bottom: 10,
    right: 20,
    backgroundColor: "#1B4A58",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    width: "25%",
    alignItems: "center",
  },

  btnText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 500,
  },
});
