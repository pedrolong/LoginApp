
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
return (
    <View style={styles.container}>
      

<TextInput style={styles.inputName}
placerholder='Senha'
color= 'black'
inputMode= 'email' 


/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  secondaryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});