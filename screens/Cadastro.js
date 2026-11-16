import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Alert,
  Text,
} from 'react-native';

import CampoTexto from '../components/CampoTexto';
import Botao from '../components/Botao';

export default function Cadastro({
  navigation,
  setPokemons,
}) {
  const [formulario, setFormulario] = useState({
    nome: '',
    tipo: '',
    nivel: '',
    quantidade: '',
  });

  const atualizarCampo = (campo, valor) => {
    setFormulario((estadoAtual) => ({
      ...estadoAtual,
      [campo]: valor,
    }));
  };

  const cadastrarPokemon = () => {
    if (
      formulario.nome.trim() === '' ||
      formulario.tipo.trim() === '' ||
      formulario.nivel.trim() === '' ||
      formulario.quantidade.trim() === ''
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

      return;
    }

    const novoPokemon = {
      id: Date.now().toString(),
      nome: formulario.nome,
      tipo: formulario.tipo,
      nivel: formulario.nivel,
      quantidade: formulario.quantidade,
    };

    setPokemons((listaAtual) => [
      ...listaAtual,
      novoPokemon,
    ]);

    Alert.alert(
      'Sucesso!',
      'Pokémon cadastrado com sucesso!',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <Text style={styles.titulo}>
        Nova Carta Pokémon
      </Text>

      <Text style={styles.subtitulo}>
        Cadastre um Pokémon da sua coleção
      </Text>

      <CampoTexto
        label="Nome"
        value={formulario.nome}
        onChangeText={(valor) =>
          atualizarCampo('nome', valor)
        }
        placeholder="Ex.: Pikachu"
      />

      <CampoTexto
        label="Tipo"
        value={formulario.tipo}
        onChangeText={(valor) =>
          atualizarCampo('tipo', valor)
        }
        placeholder="Ex.: Elétrico"
      />

      <CampoTexto
        label="Nível"
        value={formulario.nivel}
        onChangeText={(valor) =>
          atualizarCampo('nivel', valor)
        }
        placeholder="Ex.: 25"
        keyboardType="numeric"
      />

      <CampoTexto
        label="Quantidade"
        value={formulario.quantidade}
        onChangeText={(valor) =>
          atualizarCampo('quantidade', valor)
        }
        placeholder="Ex.: 1"
        keyboardType="numeric"
      />

      <Botao
        titulo="Cadastrar Pokémon"
        aoPressionar={cadastrarPokemon}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },

  titulo: {
    color: '#3B4CCA',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  subtitulo: {
    color: '#555555',
    fontSize: 15,
    marginBottom: 25,
  },
});