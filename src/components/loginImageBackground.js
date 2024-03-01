import { View, ImageBackground  } from "react-native";
import styles from "../styles/StyleSheet"
import LoginButton from "../components/loginButton";
import LoginImage from "../components/loginImage";
import LoginInput from "../components/loginInput";
import LoginText from "../components/loginText";


export default function LoginBackground () {
    return (
    
        <ImageBackground 
            source={require("../assets/images/fundoo.png")} 
            style={styles.fundo}
        >
            <LoginImage/>
            <LoginText />
            <LoginInput/>
            <LoginButton/>
        </ImageBackground>
 
    );
}
