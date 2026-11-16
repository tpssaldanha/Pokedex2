import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function Botao({ titulo, aoPressionar }) {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={aoPressionar}
      activeOpacity={0.8}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#E3350D',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#B71C1C',
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});