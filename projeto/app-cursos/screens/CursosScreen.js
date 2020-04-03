import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export function CursosScreen() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const listarCursos = async () => {
    setLoading(true);
    const response = await axios.get(URL);
    setData(response.data);
    setLoading(false);
  }

  React.useEffect(() => {
    listarCursos();
  }, [])

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.texto}>Lista de Cursos</Text>
        <FlatList
          data={data}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => listarCursos()}
            />
          }
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <View style={styles.row}>
                  <Text>Código: </Text>
                  <Text style={styles.conteudo}>{item.codigo}</Text>
                </View>
                <View style={styles.row}>
                  <Text>Descrição: </Text><Text style={styles.conteudo}>{item.descricao}</Text>
                </View>
                <View style={styles.row}>
                  <Text>Carga Horária: </Text>
                  <Text style={styles.conteudo}>{item.cargaHoraria}</Text>
                  <Text>h</Text>
                </View>
                <View style={styles.row}>
                  <Text>Preço: R$</Text><Text style={styles.conteudo}>{item.preco}</Text>
                </View>
                <View style={styles.row}>
                  <Text>Categoria: </Text><Text style={styles.conteudo}>{item.categoria}</Text>
                </View>
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
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
    alignItems: "center",
    backgroundColor: "#7DD6FF",
    marginVertical: '3%',
    padding: 20,
    borderColor: '#669DE8',
    borderWidth: 1,
    borderRadius: 5,
  }
});
