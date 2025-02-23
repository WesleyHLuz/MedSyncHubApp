import {Dimensions, StyleSheet} from "react-native";
import {themes} from "../../global/themes";

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        boxTop: {
            height:Dimensions.get("window").height/3,
            width: '100%',
            backgroundColor: 'white',
            alignItems: 'center',

        },
        boxMid: {
            height:Dimensions.get("window").height/4,
            width: '100%',
            backgroundColor: 'white',
            paddingHorizontal: 37
        },
        boxBottom: {
            height:Dimensions.get("window").height/3,
            width: '100%',
            backgroundColor: 'white',
            alignItems: 'center',
            //justifyContent: 'center',
        },
        logo: {
            width: 150,
            height: 200,
            marginHorizontal: 120
        },
        text: {
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 40
        },
        titleInput: {
            marginLeft: 5,
            marginTop: 20,
            color:themes.colors.secondaryText
        },
        boxInput: {
            width: '100%',
            height: 40,
            borderWidth: 1,
            borderRadius: 40,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: 'white',
            borderColor: themes.colors.tertiary,
        },
        input: {
            height: '100%',
            width: '90%'
        },
        button: {
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: themes.colors.primary,
            borderRadius: 40,
        },
        textButton: {
            fontSize: 14,
            color: themes.colors.text,
            fontWeight: 'bold',

        }

    }
)