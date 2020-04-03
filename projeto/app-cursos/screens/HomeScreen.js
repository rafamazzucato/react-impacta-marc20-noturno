import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Página Inicial</Text>
        <TouchableOpacity style={styles.button}
            onPress={() => props.navigation.navigate('Cursos')}>
            <Text style={styles.buttonText}>Cursos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={() => props.navigation.navigate('Contato')}>
            <Text style={styles.buttonText}>Contato</Text>
        </TouchableOpacity>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    color: '#7087FF',
    fontSize: 40,
    marginBottom: '5%'
  },
  button: {
    width: '50%',
    height: '10%',
    backgroundColor: '#7DD6FF',
    borderColor: '#669DE8',
    borderWidth: 2,
    marginBottom: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
    fontWeight:'bold'
  }
});

export { HomeScreen}