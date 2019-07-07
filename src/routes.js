import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { colors } from './styles';

import Welcome from './pages/Welcome';
import Repositories from './pages/Repositories';
import Organizations from './pages/Organizations';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      UserRoute: createBottomTabNavigator(
        {
          // Rota de navegação visivel apenas para usuário logado
          Repositories,
          Organizations,
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.white,
            inactiveTintColor: colors.whiteTransparent,
            style: {
              backgroundColor: colors.secundary,
            },
          },
        },
      ),
    },
    {
      // Se o usuário estivver com userLogged como true chamo a página Repositories, senão chamo a pag Welcome
      initialRouteName: userLogged ? 'UserRoute' : 'Welcome',
    },
  ),
);

export default Routes;
