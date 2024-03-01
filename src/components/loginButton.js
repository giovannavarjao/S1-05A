import styles from "../styles/StyleSheet"
import { View, Button } from "react-native";


export default function LoginButton() {

  pressButon = () => {
    alert("Você apertou o botão");
  };

  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <Button 
            onPress={pressButon} 
            title="Click Me!" 
            color="pink" 
        />
      </View>
    </View>
  );
}
