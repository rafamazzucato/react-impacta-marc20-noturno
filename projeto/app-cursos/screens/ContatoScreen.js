import * as React from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Dimensions, Alert } from 'react-native';
import { Button } from 'native-base';
import axios from 'axios';

const URL = 'http://localhost:3200/api/contatos';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export function ContatoScreen(props) {

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [assunto, setAssunto] = React.useState('');

  const limpar = () => {
    setNome('');
    setEmail('');
    setAssunto('');
  }

  const enviarContato = async () => {
    if (!nome || nome === ''
      || !email || email === ''
      || !assunto || assunto === '') {
      Alert.alert(
        'Contato',
        'Parâmetros de entrada inválidos',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      return;
    }

    try{
      await axios.post(URL, {data: new Date().toUTCString(), nome, email, assunto});
      Alert.alert(
        'Contato',
        'Contato Enviado com sucesso',
        [{ text: 'Voltar para Home', onPress: () => props.navigation.navigate('Home')  }],
        { cancelable: false }
      );
    }catch(error){
      console.log(error);
      Alert.alert(
        'Contato',
        'Ocorreu erro ao enviar contato',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.texto}>Envie seu contato</Text>
        <TextInput style={styles.item} placeholder="Digite seu nome"
          value={nome} onChangeText={setNome}></TextInput>
        <TextInput style={styles.item} placeholder="Digite seu email"
          value={email} onChangeText={setEmail}></TextInput>
        <TextInput style={[styles.item, styles.area]} placeholder="Escreva aqui o assunto de seu interesse"
          value={assunto} onChangeText={setAssunto}></TextInput>

        <View style={[styles.containerButtons, styles.row]}>
          <Button primary style={styles.button} onPress={enviarContato}><Text style={[styles.textButton, styles.textPrimary]}>Enviar Contato</Text></Button>
          <Button light style={styles.button} onPress={limpar}><Text style={[styles.textButton]}>Limpar</Text></Button>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerButtons: {
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  button: {
    width: screenWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textPrimary: {
    color: '#fff'
  },
  row: {
    flexDirection: 'row'
  },
  conteudo: {
    fontSize: 15,
    color: "#0000ff"
  },
  texto: {
    alignItems: "center",
    fontSize: 30,
    margin: 20,
    color: '#7087FF',
  },
  item: {
    width: screenWidth * 0.9,
    alignItems: "center",
    marginVertical: '3%',
    padding: 20,
    borderColor: '#669DE8',
    borderWidth: 1,
    borderRadius: 5,
  },
  area: {
    height: screenHeight * 0.15
  }
});