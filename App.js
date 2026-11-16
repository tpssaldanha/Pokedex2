import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Cadastro from './screens/Cadastro';
import Detalhes from './screens/Detalhes';
import { pokemonInicial } from './services/pokemonData';

const Stack = createNativeStackNavigator();

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarPokemons = () => {
      setPokemons(pokemonInicial);
      setCarregando(false);
    };

    carregarPokemons();
  }, []);

  if (carregando) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator
          size="large"
          color="#E3350D"
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'Meus Pokémons',
          }}
        >
          {(props) => (
            <Home
              {...props}
              pokemons={pokemons}
              setPokemons={setPokemons}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Cadastro"
          options={{
            title: 'Cadastrar Pokémon',
          }}
        >
          {(props) => (
            <Cadastro
              {...props}
              setPokemons={setPokemons}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            title: 'Detalhes do Pokémon',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  carregando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});