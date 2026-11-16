import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Cabecalho({
  titulo,
  subtitulo,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {titulo}
      </Text>

      <Text style={styles.subtitulo}>
        {subtitulo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B4CCA',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderBottomWidth: 5,
    borderBottomColor: '#2A75BB',
  },

  titulo: {
    color: '#FFCB05',
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 5,
  },
});