import React from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Bem-vindo</Text>
    <Text style={styles.text}>Para continuar precisamos que você informe seu usuário</Text>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none" // Caixa Alta
        autoCorrect={false} // Correção de palavras
        placeholder="Digite seu usuário"
        underlineColorAndroid="transparent" // Remove linha embaixo do texto padrão do android
      />

      <TouchableOpacity style={styles.button} onPres={() => {}}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
