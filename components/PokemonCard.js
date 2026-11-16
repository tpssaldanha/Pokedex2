import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function PokemonCard({
  pokemon,
  aoPressionar,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => aoPressionar(pokemon)}
      activeOpacity={0.8}
    >
      <View style={styles.topo}>
        <Text style={styles.nome}>
          {pokemon.nome}
        </Text>

        <Text style={styles.tipo}>
          {pokemon.tipo}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.texto}>
          Nível: {pokemon.nivel}
        </Text>

        <Text style={styles.texto}>
          Quantidade: {pokemon.quantidade}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2A75BB',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
  },

  topo: {
    backgroundColor: '#FFCB05',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#2A75BB',
  },

  nome: {
    color: '#1F1F1F',
    fontSize: 21,
    fontWeight: 'bold',
  },

  tipo: {
    color: '#3B4CCA',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 3,
  },

  info: {
    padding: 15,
  },

  texto: {
    color: '#1F1F1F',
    fontSize: 15,
    marginBottom: 4,
  },
});