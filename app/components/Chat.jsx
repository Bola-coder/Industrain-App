import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Chat = () => {
  return (
    <View style={styles.chat}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("./../../assets/chatProfileImage.jpeg")}
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.textContainer} activeOpacity={0.5}>
        <View style={styles.messageContainer}>
          <Text style={styles.name}>Ahmed Bolarinwa</Text>
          <Text style={styles.text}>Thank you so much</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.time}>20 mins ago</Text>
          <View style={styles.messageCount}>
            <Text style={styles.messageCountText}>3</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chat: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imageContainer: {
    flexBasis: "20%",
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#E3E9EC",
  },

  messageContainer: {
    flexBasis: "60%",
  },

  name: {
    fontSize: 22,
    fontWeight: 500,
  },

  text: {
    fontSize: 16,
    fontWeight: 300,
    paddingTop: 5,
  },

  details: {
    flexBasis: "25%",
  },

  time: {
    fontSize: 16,
    fontWeight: 300,
  },

  messageCount: {
    position: "absolute",
    top: 20,
    right: 10,
    backgroundColor: "#BCD195",
    width: 20,
    height: 20,
    padding: 2,
    borderRadius: 10,
  },

  messageCountText: {
    fontSize: 14,
    textAlign: "center",
  },
});
