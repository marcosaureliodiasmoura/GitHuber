import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, AsyncStorage, ActivityIndicator, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import styles from './styles';

import Header from '../../components/Header';

// Importamos o repository Item
import RepositoryItem from './RepositoriesItem';

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

  // Pra pegar o conteúdo de cada repositorio do Item de Flatlist e
  // Repassar para o componente RepositoryItem que ta esperando uma
  // Propriedade repository, vou passar repository dentro e
  // Pra pegar o item do Flatlist terei que passar uma desestruturação do
  // Objeto que eu recebo e então passar o item.
  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  // renderList = () => <Text>Lista</Text>;
  renderList = () => {
    const { data } = this.state;

    return (
      <FlatList
        data={data} // Qual o array onde está os meus dados? nosso data do state
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
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
