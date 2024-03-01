import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, Image, TextInput } from 'react-native';
import Login from './src/pages/login';
import { styles } from './src/styles/StyleSheet';

export default function App(){

    return (
        <View style={ styles.container }>
           <Login/>
        </View>
    )
}
