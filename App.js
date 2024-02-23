
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {
  const fundo = { uri: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/04/brasilia.jpg' }
  const img = { uri: 'https://www.ifpb.edu.br/servidor/noticias/2016/oficio-do-mp-informa-sobre-recesso-de-fim-de-ano/governo-federal.png/@@images/453bb29f-4b69-4f22-8c9d-193b33c4fe18.png' }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={fundo}
        style={styles.fundo}
        resizeMode='cover'
      >

        {/*3 Textos*/}
        <Image
          style={{ height: 225, width: 225, }}
          source={img} />
        <Text style={{ fontSize: 36, color: 'white', }}>Faça seu login</Text>

        <TextInput style={{ height: 100, width: 400, border: 'solid', borderWidth: 1, borderColor: 'white', color: 'white', fontSize: 24, }}
          placeholder='Email'
          inputMode='text'
          color='white'

        />

        <TextInput style={{ height: 100, width: 400, border: 'solid', borderWidth: 1, borderColor: 'white', color: 'white', fontSize: 24, }}
          placeholder='Senha'
          placeholderColor='white'
          secureTextEntry={true}
          color= 'black'
          inputMode='text'
        />
        <Button style={styles.btn}
          title="Confirmar"
        />
      </ImageBackground>
    </View>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center',
    display: 'flex',
  },

  secondaryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  fundo: {
    flex: 1,
    alignItems: 'center',
  }
});




