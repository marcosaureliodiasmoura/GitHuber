import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, AsyncStorage, Text, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import styles from './styles';

import Header from '../../components/Header';

// // Criamos em formato de função para pegarmos a tintColor para repassarmos pro nosso icone.
const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username'); // Vou usar este username para buscar os repositorios da API.
    //     // 1° Forma de fazer
    //     // const response  = await api.get(`/users/${username}/repos`); // Busco todos os repositorios referente ao username que foi digitado.
    //     // this.setState({ data: response.data});
    //     // 2° Forma de fazer com desestruturação
    const { data } = await api.get(`/users/${username}/repos`); // Busco todos os repositorios referente ao username que foi digitado.
    this.setState({ data, loading: false });
  }

  renderList = () => <Text>Lista</Text>;

  render() {
    const { loading } = this.state;

    return (
      <View>
        <Header title="Repositorios" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
        {/* {this.state.data.map(repo => (
          <Text>{repo.name}</Text>
        ))} */}
      </View>
    );
  }
}

// O loading está como true, onde será renderizado na tela o ActivityIndicator que é o "loading Icone"
// Quando o componentDidMount consumir as informações da api
// ele irá me retornar as informações (data) e o loading como false.
// No render, ele irá chamar a função renderList() que irá "desligar" o loading e mostrar a mensagem (lista)
