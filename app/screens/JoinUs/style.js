import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  joinUs: {
    backgroundColor: "#1B4A58",
    height: "100%",
  },

  joinUsImage: {
    marginTop: 80,
  },

  joinUsContent: {
    alignItems: "center",
  },

  joinUsContentText: {
    fontSize: 30,
    color: "#fff",
  },

  joinUsBtns: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  joinUsBtn: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    width: "40%",
    marginHorizontal: 10,
    borderRadius: 6,
  },

  joinUsBtnDark: {
    backgroundColor: "#1A353E",
  },

  joinUsBtnText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500,
  },

  joinUsBtnTextDark: {
    color: "#fff",
  },
});

export default styles;
