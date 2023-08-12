import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  chat: {
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    minHeight: "100%",
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
    top: 15,
    left: 10,
    opacity: 100,
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

  chatContent: {
    paddingTop: 20,
    paddingBottom: 70,
  },
});

export default styles;
