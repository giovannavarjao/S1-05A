import { styles } from "../styles/StyleSheet";
import { StyleSheet, Text, View, ImageBackground, Button, TextInput } from 'react-native';
export default function Body() {

    pressButon = () => {
        alert("Você apertou o botão")
    }

  
    return (
        <View style={styles.container}>

            <ImageBackground
             source={ require('../assets/images/rosaaa.jpg')}
             style={styles.img}>
            

            <View style={styles.secondaryContainer}>

                <TextInput style={styles.inputName}
                    placeholder='User'
                    inputMode='Text'
                    secureTextEntry={false}
                    placeholderTextColor='black'
                />

                <TextInput style={styles.inputName}
                    placeholder='Digite sua senha'
                    inputMode='numeric'
                    secureTextEntry={true}
                    placeholderTextColor='black'
                />


                <Button
                    onPress={pressButon}
                    title='Click Me!'
                    color='pink'
                    />


            </View>
            
            </ImageBackground>

        </View>
    );
}


