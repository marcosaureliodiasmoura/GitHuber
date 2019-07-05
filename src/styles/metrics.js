import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
// Retorna a largura e altura do celular do usuário
// Posso fazer adaptações com largura e altura do usuário
// Pode ocultar e modificar coisas.

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,

  // Se a Width for menor que a height eu retorno a width
  // Senão retorno a height
  // Isso nos ajuda a trabalhar com a aplicação em modo de landscpa e portrait
  screenWidth: width < height ? width : height,

  // Mesma coisa
  screenHeight: width < height ? height : width,
};
