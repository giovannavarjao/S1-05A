import styles from "../styles/StyleSheet"
import { View, TextInput } from "react-native";


export default function LoginInput() {

  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <TextInput
          style={styles.inputName}
          placeholder="User"
          inputMode="Text"
          secureTextEntry={false}
          placeholderTextColor="black"
        />

        <TextInput
          style={styles.inputName}
          placeholder="Digite sua senha"
          inputMode="numeric"
          secureTextEntry={true}
          placeholderTextColor="black"
        />
      </View>
    </View>
  );
}
