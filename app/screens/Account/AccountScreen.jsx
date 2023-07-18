import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import IonIcon from "@expo/vector-icons/Ionicons";
import styles from "./style";
import ScreenHeader from "../../components/ScreenHeader";
import { useAuth } from "../../context/AuthContext";
import { useUserContext } from "../../context/UserContext";

const AccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const { userDetails, clearUserDetails, getUserDetails } = useUserContext();
  const handleLogout = async () => {
    await logout();
    clearUserDetails();
    Alert.alert("Signout successful");
    navigation.navigate("Login");
  };
  return (
    <ScrollView
      contentContainerStyle={styles.account}
      showsVerticalScrollIndicator={false}
    >
      {/* <ScreenHeader /> */}
      {/* Profile */}
      {/* Profile Picture */}
      <View style={styles.imageContainer}>
        <View style={styles.slantImage}>
          <Image
            source={require("./../../../assets/slantProfileRectangle.png")}
          />
          <View style={styles.profileImageContainer}>
            <Image
              source={require("./../../../assets/sampleDP.png")}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.upload} activeOpacity={0.7}>
              <FontAwesomeIcon name="camera" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* End Of Profile Picture */}

      {/* Profile Details */}
      <View style={styles.profileDetails}>
        <Text style={styles.profileName}>Bolarinwa Ahmed</Text>
        <Text style={styles.profileRole}>Computer Science</Text>
        <View style={styles.location}>
          <IonIcon name="location-outline" size={24} />
          <Text style={styles.profileLocation}>Ifo, Ogun State</Text>
        </View>
      </View>
      {/* End of Profile Details */}
      {/* End of Profile */}

      {/*  Account Settings*/}
      <View style={styles.accountSettingContainer}>
        <TouchableOpacity
          style={styles.accountSetting}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("PersonalInformation")}
        >
          <IonIcon name="person" size={30} color="#828282" />
          <Text style={styles.accountSettingText}>Personal Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountSetting} activeOpacity={0.6}>
          <IonIcon name="school" size={30} color="#828282" />
          <Text style={styles.accountSettingText}>School Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountSetting} activeOpacity={0.6}>
          <IonIcon name="document" size={30} color="#828282" />
          <Text style={styles.accountSettingText}>Upload Document</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountSetting} activeOpacity={0.6}>
          <IonIcon name="notifications" size={30} color="#828282" />
          <Text style={styles.accountSettingText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.accountSetting}
          activeOpacity={0.6}
          onPress={handleLogout}
        >
          <IonIcon name="log-out" size={30} color="#828282" />
          <Text style={styles.accountSettingText}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* End of Account Settings */}
    </ScrollView>
  );
};

export default AccountScreen;
