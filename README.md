# Pokédex - Minha Coleção

## Descrição
Aplicativo desenvolvido em React Native com Expo para cadastro e controle de Pokémon pertencentes à coleção do usuário. O app permite cadastrar novos Pokémon, visualizar a lista cadastrada e consultar os detalhes de cada Pokémon.

## Aluno
Nome: **Tailaine Pereira da Silva Saldanha**  
RGM: **04199306-3**

## Telas
- **Meus Pokémon (Home):** exibe a lista de Pokémon cadastrados e permite acessar o cadastro de um novo Pokémon.
- **Cadastrar Pokémon:** permite informar nome, tipo, nível e quantidade do Pokémon e adicioná-lo à coleção.
- **Detalhes do Pokémon:** exibe as informações do Pokémon selecionado.

## Fonte de dados
**Dados locais.**

Os dados iniciais dos Pokémon estão armazenados em:

`services/pokemonData.js`

Não é utilizada API externa.

## Onde estão os requisitos
- **Componentes:** `components/Botao.js`, `components/Cabecalho.js`, `components/CampoTexto.js` e `components/PokemonCard.js`
- **Props com callback:** `components/PokemonCard.js` utiliza a prop `aoPressionar` para executar uma função ao selecionar um Pokémon.
- **useState:** `App.js` utiliza `useState` para controlar a lista de Pokémon e o estado de carregamento. `screens/Cadastro.js` utiliza `useState` para controlar os dados do formulário.
- **useEffect:** `App.js` utiliza `useEffect` para carregar os dados iniciais dos Pokémon.
- **Navegação com parâmetros:** `screens/Home.js` envia o Pokémon selecionado através de `navigation.navigate('Detalhes', { pokemon })`, e `screens/Detalhes.js` recebe o parâmetro através de `route.params`.
- **Navegação:** `App.js` utiliza `NavigationContainer` e `createNativeStackNavigator`.
- **Lista:** `screens/Home.js` utiliza `FlatList` para exibir os Pokémon cadastrados.
- **Formulário controlado:** `screens/Cadastro.js` utiliza `value` e `onChangeText` para controlar os campos.
- **Estilização:** os componentes e telas utilizam `StyleSheet.create`.

## Vídeo de demonstração
`demo/demo.mp4`

## Como executar
```bash
npm install
npx expo start
```