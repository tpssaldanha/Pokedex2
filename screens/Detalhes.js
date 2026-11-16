import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Detalhes({ route }) {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cabecalho}>
          <Text style={styles.nome}>
            {pokemon.nome}
          </Text>

          <Text style={styles.tipo}>
            {pokemon.tipo}
          </Text>
        </View>

        <View style={styles.conteudo}>
          <View style={styles.item}>
            <Text style={styles.label}>
              Nível
            </Text>

            <Text style={styles.valor}>
              {pokemon.nivel}
            </Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>
              Quantidade
            </Text>

            <Text style={styles.valor}>
              {pokemon.quantidade}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#2A75BB',
    elevation: 4,
  },

  cabecalho: {
    backgroundColor: '#3B4CCA',
    padding: 25,
  },

  nome: {
    color: '#FFCB05',
    fontSize: 32,
    fontWeight: 'bold',
  },

  tipo: {
    color: '#FFFFFF',
    fontSize: 17,
    marginTop: 5,
  },

  conteudo: {
    padding: 25,
  },

  item: {
    marginBottom: 20,
  },

  label: {
    color: '#3B4CCA',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  valor: {
    color: '#1F1F1F',
    fontSize: 22,
    fontWeight: 'bold',
  },
});