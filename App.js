import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, Image, TextInput } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import { styles } from './src/styles/StyleSheet';

export default function App(){

    return (
        <View style={ styles.container }>
            <Header/>
            <Body/>
            <Footer/>
        </View>
    )
}
