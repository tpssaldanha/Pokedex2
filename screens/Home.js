import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import Cabecalho from '../components/Cabecalho';
import PokemonCard from '../components/PokemonCard';
import Botao from '../components/Botao';

export default function Home({
  navigation,
  pokemons,
}) {
  const abrirDetalhes = (pokemon) => {
    navigation.navigate('Detalhes', {
      pokemon,
    });
  };

  const abrirCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Cabecalho
        titulo="Meus Pokémons"
        subtitulo={`${pokemons.length} Pokémon cadastrados`}
      />

      <Botao
        titulo="＋ Cadastrar Pokémon"
        aoPressionar={abrirCadastro}
      />

      {pokemons.length === 0 ? (
        <Text style={styles.vazio}>
          Nenhum Pokémon cadastrado.
        </Text>
      ) : (
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PokemonCard
              pokemon={item}
              aoPressionar={abrirDetalhes}
            />
          )}
          contentContainerStyle={styles.lista}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },

  lista: {
    paddingTop: 20,
    paddingBottom: 20,
  },

  vazio: {
    color: '#1F1F1F',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
  },
});