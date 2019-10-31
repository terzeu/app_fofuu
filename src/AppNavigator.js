import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationService from './utils/NavigationService';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import QRGenerateScreen from './pages/QRGenerateScreen';
import QRScanScreen from './pages/QRScanScreen';
import LocationScreen from './pages/LocationScreen';
import NFCScreen from './pages/NFCScreen';
import RegistraMercadoriaScreen from './pages/RegistraMercadoriaScreen';
import HistoricoScreen from './pages/HistoricoScreen';
import IniciarScreen from './pages/IniciarRastreamentoScreen';
import ConcluirScreen from './pages/ConcluirRastreamentoScreen';

const MainScreen = createStackNavigator(
    {
        Iniciar: IniciarScreen,
        Concluir: ConcluirScreen,
        Qrread: QRScanScreen,
        Home: HomeScreen,
        Qrwrite: QRGenerateScreen,
        Loc: LocationScreen,
        Nfc: NFCScreen,
        Mercadoria: RegistraMercadoriaScreen,
        Historico: HistoricoScreen,
    },
    {
        initialRouteName: 'Historico',
        headerMode: 'none',
        mode: 'card'
    }
)

const AOLRotas = {
    MainScreen: MainScreen,
    Login: LoginScreen
}

const RootStack = createStackNavigator(
    {
        ...AOLRotas,
        Index: {
            screen: MainScreen
        }
    },
    {
        initialRouteName: 'Login',
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
