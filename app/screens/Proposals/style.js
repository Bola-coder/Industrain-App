import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  proposal: {
    flex: 1,
    padding: 10,
  },

  emptyImage: {
    marginTop: "15%",
    alignSelf: "center",
  },

  emptyTextContainer: {
    alignSelf: "center",
    marginVertical: 10,
  },

  emptyText: {
    fontSize: 24,
    fontWeight: 400,
    color: "#828282",
  },

  discoverCompany: {
    padding: 16,
    backgroundColor: "#1B4A58",
    width: "95%",
    borderRadius: 6,
    alignSelf: "center",
    position: "absolute",
    bottom: 50,
    alignItems: "center",
  },

  discoverCompanyText: {
    fontSize: 24,
    color: "#fff",
  },
});

export default styles;
