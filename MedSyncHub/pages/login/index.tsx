import React from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

import {MaterialIcons} from "@expo/vector-icons";

// @ts-ignore
import logo from "../../assets/logo.jpg";
import {themes} from "../../global/themes";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image source={logo}
                style={styles.logo}
                resizeMode="contain"/>
                <Text style={styles.text}>Bem vindo de volta!</Text>
            </View>
            <View style={styles.boxMid}>
                <Text style={styles.titleInput}>Endereço de email</Text>
                <View style={styles.boxInput}>
                    <TextInput style={styles.input}/>
                    <MaterialIcons
                    name="email"
                    size={20}
                    color={themes.colors.tertiary}/>
                </View>
                <Text style={styles.titleInput}>SENHA</Text>
                <View style={styles.boxInput}>
                    <TextInput style={styles.input}/>
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themes.colors.tertiary}/>
                </View>
            </View>
            <View style={styles.boxBottom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}