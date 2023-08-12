import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import styles from "./style";
import SearchComponent from "../../components/SearchComponent";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import Chat from "../../components/Chat";

const ChatScreen = () => {
  return (
    <View style={styles.chat}>
      <ScreenHeader title={"Message"} />
      <View style={styles.searchInput}>
        <FontAwesomeIcon
          name="search"
          size={20}
          color={"black"}
          style={styles.icon}
        />
        <TextInput placeholder="Search" style={styles.input} />
      </View>
      {/* Chat Contents */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.chatContent}
      >
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </ScrollView>
    </View>
  );
};

export default ChatScreen;
