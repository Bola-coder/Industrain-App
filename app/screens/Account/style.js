import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  account: {
    minHeight: "100%",
    padding: 10,
  },

  imageContainer: {
    marginBottom: 10,
  },

  slantImage: {
    position: "relative",
  },

  profileImageContainer: {
    position: "absolute",
    top: "60%",
    left: "35%",
  },

  profileImage: {
    width: 128,
    height: 130,
    borderRadius: 15,
  },

  upload: {
    position: "absolute",
    top: -10,
    right: -10,
    padding: 10,
    backgroundColor: "#BCD195",
    borderRadius: 15,
  },

  profileDetails: {
    marginTop: 40,
  },

  profileName: {
    fontSize: 26,
    textAlign: "center",
    paddingVertical: 5,
    fontWeight: 700,
    color: "#4F4F4F",
  },

  profileRole: {
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 5,
    fontWeight: 500,
    color: "#4F4F4F",
  },

  location: {
    flexDirection: "row",
    alignItems: "space-between",
    alignSelf: "center",
  },

  profileLocation: {
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 5,
    fontWeight: 500,
    color: "#4F4F4F",
    marginLeft: 10,
  },

  accountSettingContainer: {
    padding: 10,
    marginTop: 20,
  },

  accountSetting: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  accountSettingText: {
    fontSize: 20,
    fontWeight: 500,
    color: "#4F4F4F",
    marginLeft: 20,
  },
});

export default styles;
