import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, AsyncStorage, FlatList, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrganizationItem from './OrganizationItem';
import api from '../../services/api';

import Header from '../../components/Header';

import styles from './styles';

// Segunda forma de fazer para evitar erro de PropTypes
// Criamos em formato de função para pegarmos a tintColor para repassarmos pro nosso icone.
const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false, // anotação a informação de quando esta executando o refresh ou nao.
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true }); // Essa função vai ser chamada toda vez que usuário arrastar para baixo, diferente do load
    const username = await AsyncStorage.getItem('@Githuber:username'); // Vou usar este username para buscar os repositorios da API.

    const { data } = await api.get(`/users/${username}/orgs`); // Busco todos os repositorios referente ao username que foi digitado.
    this.setState({ data, loading: false, refreshing: false });
  };

  // Pra pegar o conteúdo de cada repositorio do Item de Flatlist e
  // Repassar para o componente RepositoryItem que ta esperando uma
  // Propriedade repository, vou passar repository dentro e
  // Pra pegar o item do Flatlist terei que passar uma desestruturação do
  // Objeto que eu recebo e então passar o item.
  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  // renderList = () => <Text>Lista</Text>;
  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data} // Qual o array onde está os meus dados? nosso data do state
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        onRefresh={this.loadRepositories} // onRefresh faz com que apareça uma flecha no ato de carregar novos itens na tela ao arrastar a lista pra baixo.
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
        {/* {this.state.data.map(repo => (
          <Text>{repo.name}</Text>
        ))} */}
      </View>
    );
  }
}
