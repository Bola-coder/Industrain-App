import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import IonIcon from "@expo/vector-icons/Ionicons";
import styles from "./style";
import ScreenHeader from "../../components/ScreenHeader";
import { useAuth } from "../../context/AuthContext";
import { useUserContext } from "../../context/UserContext";
import ConfirmationModal from "../../components/confirmationModal";

const AccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const { userDetails, clearUserDetails, getUserDetails } = useUserContext();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
        <Text style={styles.profileName}>{userDetails.name}</Text>
        <Text style={styles.profileRole}>{userDetails.course}</Text>
        <View style={styles.location}>
          <IonIcon name="location-outline" size={24} />
          <Text style={styles.profileLocation}>{userDetails.address}</Text>
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
        <TouchableOpacity
          style={styles.accountSetting}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("EducationalInformation")}
        >
          <IonIcon name="school" size={30} color="#828282" />
          <Text style={styles.accountSettingText}>School Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountSetting} activeOpacity={0.6}>
          <IonIcon name="document" size={30} color="#828282" />
          <Text style={styles.accountSettingText}>Upload Document</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.accountSetting}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Notification")}
        >
          <IonIcon name="notifications" size={30} color="#828282" />
          <Text style={styles.accountSettingText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.accountSetting}
          activeOpacity={0.6}
          onPress={() => {
            setShowLogoutModal(true);
          }}
        >
          <IonIcon name="log-out" size={30} color="#828282" />
          <Text style={styles.accountSettingText}>Logout</Text>
        </TouchableOpacity>

        {/* Modal to show when user clicks on the logout button above */}
        <ConfirmationModal
          visible={showLogoutModal}
          messsage={"Are you sure you want to log out?"}
          handleClose={() => {
            setShowLogoutModal(false);
          }}
          handleConfirmation={handleLogout}
        />
      </View>
      {/* End of Account Settings */}
    </ScrollView>
  );
};

export default AccountScreen;
