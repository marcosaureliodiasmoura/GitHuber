import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import styles from './styles';

class Welcome extends Component {
  // 1. Armazena o texto do input (username) dentro do estado do component.
  state = {
    username: '',
    loading: false,
    error: false,
  };

  componentDidMount() {}

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  // Recebe username como parametro para buscar o usuário
  checkUserExists = async (username) => {
    const user = await api.get(`users/${username}`);

    return user;
  };

  // Vai nos ajudar a lidar com o fluxo da aplicação, checar se o usuário existe na API e depois salvar no storage da aplicação
  SignIn = async () => {
    const { username } = this.state; // vou buscar o username dentro do estado
    const { navigation } = this.props; // desestrutura para fazer uso da propriedade navigate.

    this.setState({ loading: true }); // Se der sucesso ele vai pra próxima página

    try {
      await this.checkUserExists(username);
      await this.saveUser(username); // Salva o usuário no storage da aplicação
      // console.tron.log(this.props.navigation);
      navigation.navigate('Repositories'); // utilizo o navigate passando o nome da prox tela.
    } catch (err) {
      this.setState({ loading: false, error: true });
      console.tron.log('Usuário Inexistente');
    }
  };

  render() {
    // 2. Pega o username do estado
    const { username, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>Para continuar precisamos que você informe seu usuário</Text>

        {error && <Text style={styles.error}>Usuário Inexistente</Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none" // Caixa Alta
            autoCorrect={false} // Correção de palavras
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent" // Remove linha embaixo do texto padrão do android
            value={username}
            onChangeText={text => this.setState({ username: text })} // recebo um texto que guarda a informação do username para enviar para o state
          />

          <TouchableOpacity style={styles.button} onPress={this.SignIn}>
            {loading ? ( // Se eu tiver com o loading irei mostrar um activityIndicator se não coloco o buttonText normal, isso serve para mostrar o loading no botão.
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
