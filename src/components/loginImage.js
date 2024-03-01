import { View, Image } from 'react-native';
import styles from "../styles/StyleSheet"

export default function LoginImage() {
    return(
        <View>
            <Image 
                source={require('../assets/images/amoraa.png')} 
                style={styles.image1}
                resizeMode='cover'
            />
        </View>
    );
}

