import { useEffect } from "react";
import { LogBox } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { Cadastro } from './pages/cadastro/cadastro';
import { auth, db } from "./classes/firebaseConfigurations";
import * as SplashScreen from 'expo-splash-screen';
const Stack = createStackNavigator();
import Login from "./pages/login";
import { NavigationContainer } from "@react-navigation/native";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
    useEffect(() => {
        const loadApp = async () => {
            try {
                // Simulate a delay (e.g., Firebase or other setup)
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Firebase initialization check
                console.log("Firebase inicializado:", auth, db);
                LogBox.ignoreLogs(["AsyncStorage has been extracted"]);
            } catch (error) {
                console.log("Erro durante a inicialização:", error);
            } finally {
                // Hide splash screen once everything is ready
                await SplashScreen.hideAsync();
            }
        };

        loadApp();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
