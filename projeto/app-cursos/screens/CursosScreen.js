import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export function CursosScreen() {
  const [data, setData] = React.useState([]);

  const listarCursos = async () => {
    const response = await axios.get(URL);
    setData(response.data);
  }

  React.useEffect(() => {
    listarCursos();
  }, [listarCursos])

  return (
    <View style={styles.container}>
      <View>
        <SafeAreaView>
          <Text style={styles.texto}>Lista de Cursos</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.conteudo}>
                    {item.descricao}</Text>
                </View>)
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </View>
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
  conteudo: {
    fontSize: 15,
    color: "#333333"
  },
  texto: {
    alignItems: "center",
    fontSize: 30,
    margin: 20,
    color: '#FF0000',
  }, item: {
    alignItems: "center",
    backgroundColor: "#dcda44",
    flexGrow: 1,
    margin: 4,
    padding: 20
  }
});
