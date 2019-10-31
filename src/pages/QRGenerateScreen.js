import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg';
import HomeHeader from '../components/HomeHeader'
 
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
 
class QRGenerateScreen extends Component {
  state = {
    text: '65A35A56-12CF-4C9F-B52B-9B8D79ABD567',
  };

  render() {
    const { navigation } = this.props
    return (
      <View style={{flex:1}}>
        <HomeHeader
          title="Concluir Entrega"
          navigation={ navigation }
          retornar={true} />
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text: text})}
            value={this.state.text}
          />
          <QRCode
            value={this.state.text}
          />
        </View>
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});
 
AppRegistry.registerComponent('QRGenerateScreen', () => QRGenerateScreen);
 
module.exports = QRGenerateScreen;