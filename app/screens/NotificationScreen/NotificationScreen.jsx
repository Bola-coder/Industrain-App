import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import styles from "./style";
import NotificationCard from "../../components/NotificationCard";

const NotificationScreen = () => {
  return (
    <View style={styles.notification}>
      <ScreenHeader title={"Notifications"} />
      <View style={styles.searchInput}>
        <FontAwesomeIcon
          name="search"
          size={20}
          color={"black"}
          style={styles.icon}
        />
        <TextInput placeholder="Search" style={styles.input} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.notifications}
      >
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
