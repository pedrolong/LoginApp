
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
return (
    <View style={styles.container}>
      
      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>

      <View style={styles.secondaryContainer}>
        <Text style={{color:'blue', fontSize:30,fontWeight:'bold', textAlign:'right'}}>Pedro Henrique Longo</Text> 

        <Text style={{fontSize:25,fontStyle:'italic', border: 'solid', borderWhidt:'1', borderColor: 'black', textAlign:'left'}}>31</Text> 

        <Text style={{fontSize:20, textAlign:'center', backgroundColor: 'pink'}}>Sala 7</Text>

        <Text style={{fontSize:35, textAlign:'center', backgroundColor: 'blue', border: 'solid', borderWhidt:'1', borderColor: 'black'}}>SENAI</Text>
      </View>

      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>

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