import { Platform, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthProvider from "./app/context/AuthContext";
import UserProvider from "./app/context/UserContext";
import AppContent from "./app/components/AppContent";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
