import React, {useState} from "react";
import {auth} from "../../classes/firebaseConfigurations";
import {db} from "../../classes/firebaseConfigurations";
import { ScrollView } from 'react-native';
import {Alert, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";
// @ts-ignore
import logo from "../../assets/logotelalogin.png";
import {MaterialIcons} from "@expo/vector-icons";
import {themes} from "../../global/themes";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { StackNavigationProp } from '@react-navigation/stack';
import { collection, doc, setDoc } from "firebase/firestore";

type CadastroScreenNavigationProp = StackNavigationProp<any, 'Cadastro'>;

interface CadastroProps {
    navigation: CadastroScreenNavigationProp;
}


export function Cadastro ({ navigation }: CadastroProps) {

    const [firstName, setfirstName] = useState<string>("");
    const [lastName, setlastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const configuraCadastro = async () => {
        if(!firstName || !lastName || !email || !password){
            Alert.alert('Erro', "Preencha os campos!");
            return;
        }
    }

   async function registraUsuario()
    {
        await configuraCadastro();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Novo usuário:", userCredential.user.uid);



            const userRef = doc(collection(db, "usuarios"), user.uid);
            await setDoc(userRef, {
                firstName,
                lastName,
                email,
            });

            Alert.alert("Sucesso", "Usuário cadastrado e dados salvos!");
            console.log("Novo usuário:", user.uid);
            navigation.navigate("Login");
        }
        catch (error: any) {
            setError(error.message);
        }
    }



    return (
        <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }} >
            <View style={styles.container}>
                <View style={styles.boxTop}>
                    <Image
                        source={logo}
                        style={[styles.logo]}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.boxMid}>
                    <Text style={styles.titleInput}>NOME</Text>
                    <View style={styles.boxInput}>
                        <TextInput style={styles.input} placeholder="Digite seu nome" value={firstName} onChangeText={setfirstName}/>
                        <MaterialIcons name="email" size={20} color={themes.colors.tertiary} />
                    </View>

                    <Text style={styles.titleInput}>SOBRENOME</Text>
                    <View style={styles.boxInput}>
                        <TextInput style={styles.input} placeholder="Digite seu sobrenome" value={lastName} onChangeText={setlastName} />
                        <MaterialIcons name="email" size={20} color={themes.colors.tertiary} />
                    </View>

                    <Text style={styles.titleInput}>EMAIL</Text>
                    <View style={styles.boxInput}>
                        <TextInput style={styles.input} placeholder="Digite seu e-mail" value={email} onChangeText={setEmail} />
                        <MaterialIcons name="email" size={20} color={themes.colors.tertiary} />
                    </View>

                    <Text style={styles.titleInput}>SENHA</Text>
                    <View style={styles.boxInput}>
                        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} value={password} onChangeText={setPassword} />
                        <MaterialIcons name="remove-red-eye" size={20} color={themes.colors.tertiary} />
                    </View>

                </View>
                <View style={{ alignItems: 'center', marginTop: 200}}>
                    <TouchableOpacity style={[styles.button, {marginTop: 100}] } onPress={registraUsuario}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                <View></View>
            </View>
        </ScrollView>

    )
}