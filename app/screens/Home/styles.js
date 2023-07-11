import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  home: {
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
  },

  homeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  homeHeaderText: {
    paddingVertical: 5,
  },

  homeHeaderTextMain: {
    fontSize: 16,
    color: "#828282",
  },

  homeHeaderTextInner: {
    fontSize: 26,
    fontWeight: 700,
    color: "#4F4F4F",
  },

  inputContainer: {
    paddingVertical: 5,
  },

  homeCTA: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#BCD195",
    marginTop: 10,
    borderRadius: 8,
  },

  homeCTAContent: {
    flexBasis: "60%",
  },

  homeCTAText: {
    fontSize: 20,
    fontWeight: 500,
    paddingVertical: 5,
  },

  homeCTABtn: {
    padding: 10,
    backgroundColor: "#1B4A58",
    width: "60%",
    borderRadius: 8,
    marginTop: 10,
  },

  homeCTABtnText: {
    fontSize: 18,
    fontWeight: 500,
    textAlign: "center",
    color: "#FFF",
  },

  homeCTAImageContainer: {
    width: "100%",
  },

  category: {
    padding: 10,
  },

  componentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },

  componentHeaderText: {
    fontSize: 20,
    fontWeight: 500,
    color: "#333333",
  },

  componentHeaderLink: {
    backgroundColor: "transparent",
  },

  componentHeaderLinkText: {
    fontSize: 18,
    fontWeight: 600,
    fontWeight: 500,
    color: "#BCD195",
  },
});

export default styles;
