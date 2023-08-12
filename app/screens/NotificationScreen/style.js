import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  notification: {
    padding: 10,
    paddingBottom: 70,
  },
  searchInput: {
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    position: "relative",
  },

  icon: {
    position: "absolute",
    top: 12,
    left: 10,
    zIndex: 10,
    color: "#828282",
  },

  input: {
    padding: 10,
    paddingLeft: 40,
    // borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#E3E9EC",
    // Amdroid border styles
    elevation: 1,
    // IOS border styles
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    fontSize: 20,
  },

  notifications: {
    marginTop: 20,
    paddingBottom: 70,
    borderTopWidth: 2,
    borderTopColor: "#E3E9EC",
  },
});

export default styles;
