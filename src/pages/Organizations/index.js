import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import Header from '../../components/Header';

const Organizations = () => (
  <View>
    <Header title="Organizações" />
  </View>
);

// Segunda forma de fazer para evitar erro de PropTypes
// Criamos em formato de função para pegarmos a tintColor para repassarmos pro nosso icone.
const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Organizations.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Organizations;
