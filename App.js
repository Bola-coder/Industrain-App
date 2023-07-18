import { Platform, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "react-query";
import AuthProvider from "./app/context/AuthContext";
import UserProvider from "./app/context/UserContext";
import AppContent from "./app/components/AppContent";
import JobProvider from "./app/context/JobContext";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UserProvider>
            <JobProvider>
              <AppContent />
            </JobProvider>
          </UserProvider>
        </AuthProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
