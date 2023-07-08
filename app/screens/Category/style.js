import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  category: {
    padding: 10,
    height: "100%",
  },

  categoryContent: {
    width: "100%",
    // backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "space-between",
  },

  categoryCardContainer: {
    flexBasis: "50%",
    padding: 10,
    // backgroundColor: "yellow",
  },
  categoryCard: {
    alignItems: "center",
    height: height / 6,
    borderRadius: 10,
    marginTop: 10,
    padding: 5,
    backgroundColor: "#E6E6E6",
  },

  categoryCardImg: {
    paddingTop: 10,
    width: 50,
    height: 50,
    backgroundColor: "red",
  },

  categoryCardText: {
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: 600,
    color: "#4F4F4F",
  },

  categoryCardSubText: {
    fontSize: 18,
    color: "#4F4F4F",
  },
});

export default styles;
