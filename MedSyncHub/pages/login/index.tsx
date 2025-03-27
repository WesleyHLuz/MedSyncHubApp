import React, { useState } from "react";
import { auth } from "../../classes/firebaseConfigurations"; // Certifique-se de usar o 'auth' modular
import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import { StackNavigationProp } from '@react-navigation/stack'; // Importa o tipo correto
// @ts-ignore
import logo from "../../assets/logotelalogin.png";
import { themes } from "../../global/themes";
import { signInWithEmailAndPassword } from "firebase/auth";  // Importação correta

type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
    navigation: LoginScreenNavigationProp;
}

export default function Login({ navigation }: LoginProps) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function loginUsuario() {
        if (!email || !password) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
        }

        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password); // Chama a função de login do Firebase
            Alert.alert("Sucesso", "Login realizado!");
            console.log("Usuário logado:", userCredential.user.uid);


        } catch (error: any) {
            setError(error.message);
            Alert.alert("Erro", error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image source={logo} style={styles.logo} resizeMode="contain" />
                <Text style={styles.text}>Bem-vindo de volta!</Text>
            </View>
            <View style={styles.boxMid}>
                <Text style={styles.titleInput}>EMAIL</Text>
                <View style={styles.boxInput}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons name="email" size={20} color={themes.colors.tertiary} />
                </View>

                <Text style={styles.titleInput}>SENHA</Text>
                <View style={styles.boxInput}>
                    <TextInput
                        style={styles.input}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons name="remove-red-eye" size={20} color={themes.colors.tertiary} />
                </View>
            </View>

            <View style={styles.boxBottom}>
                <TouchableOpacity style={styles.button} onPress={loginUsuario}>
                    {loading ? <ActivityIndicator color={'#FFFFFF'} /> : <Text style={styles.textButton}>Entrar</Text>}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.titleInput}>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
