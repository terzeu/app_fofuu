import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationService from './utils/NavigationService';
import HomeScreen from './pages/HomeScreen';
import AtividadesScreen from './pages/AtividadesScreen';
import ConcluirScreen from './pages/ConcluirScreen';
import BemVindosScreen from './pages/BemVindosScreen';


const MainScreen = createStackNavigator(
    {
        Concluir: ConcluirScreen,
        Atividades: AtividadesScreen,
        BemVindos: BemVindosScreen,
    },
    {
        initialRouteName: 'BemVindos',
        headerMode: 'none',
        mode: 'card'
    }
)

const AOLRotas = {
    MainScreen: MainScreen,
    Home: HomeScreen
}

const RootStack = createStackNavigator(
    {
        ...AOLRotas,
        Index: {
            screen: MainScreen
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        mode: 'card'
    }
)

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        )
    }
}
