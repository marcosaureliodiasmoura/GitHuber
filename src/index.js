import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import './config/ReactotronConfig'; // Para conseguir debugar a aplicação

import createNavigator from './routes';

// O AsyncStorage.de guarda a informação do usuário

export default class App extends Component {
  state = {
    userChecked: false, // Guarda a informação se fizemos o checked ou não. (se fomos no asyncStorage e viu se a informação estava la ou não)
    userLogged: false, // Vira true se o usuário estiver no async storage.
  };

  // será assicrono
  async componentDidMount() {
    // Faremos uma verificação de forma assincrona, se o usuário existe ou não.
    // Se existir ele preenche o userLogged
    const username = await AsyncStorage.getItem('@Githuber:username');

    this.setState({
      userChecked: true,
      userLogged: !!username, // vai pegar o username e converter em booleano com !!
      // Trocando o valor para booleano, se ele existir manda true senão mantém false.
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    // Se tivermos a propriedade userChecked como false iremos retornar null.
    if (!userChecked) return null;

    // Se tivermos a prop. userChecked como true, quero que acesse a rota repositories.

    const Routes = createNavigator(userLogged); // A rota se tornou uma função, por isso o createNavigator

    return <Routes />;
  }
}
