import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './pages/Welcome';
import Repositories from './pages/Repositories';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Repositories,
    },
    {
      // Se o usuário estivver com userLogged como true chamo a página Repositories, senão chamo a pag Welcome
      initialRouteName: userLogged ? 'Repositories' : 'Welcome',
    },
  ),
);

export default Routes;
