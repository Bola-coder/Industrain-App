import { Platform, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthProvider from "./app/context/AuthContext";
import UserProvider from "./app/context/UserContext";
import AppContent from "./app/components/AppContent";
import JobProvider from "./app/context/JobContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <UserProvider>
          <JobProvider>
            <AppContent />
          </JobProvider>
        </UserProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
