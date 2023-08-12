import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IonIcon from "@expo/vector-icons/Ionicons";

const NotificationCard = () => {
  return (
    <TouchableOpacity style={styles.notification} activeOpacity={0.5}>
      <IonIcon
        name="notifications"
        color={"#1B4A58"}
        size={24}
        style={styles.icon}
      />
      <View style={styles.text}>
        <Text style={styles.mainText}>
          Your proposal to the company "Ogun osun water corporation" was
          declined.
        </Text>
        <Text style={styles.subText}>April 25</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  notification: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#E3E9EC",
  },

  icon: {
    flexBasis: "10%",
  },

  text: {
    flexBasis: "90%",
    paddingHorizontal: 5,
  },

  mainText: {
    fontSize: 20,
    fontWeight: 500,
  },
});
