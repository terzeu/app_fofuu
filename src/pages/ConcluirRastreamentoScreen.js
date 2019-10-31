import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import HomeHeader from '../components/HomeHeader'
import Geolocation from '@react-native-community/geolocation';
import { axiospost } from '../utils/lib';
import base64 from 'react-native-base64'
import { Spinner } from 'native-base';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  token: store.loggedIn.token
});

function mapDispatchToProps(dispatch) {
  return({
      clickMuda: (item,tipo) => {
          dispatch({ type: tipo, valor:item})
      }
  });
}

export class RegistraMercadoriaScreen extends Component {

  state = {
    success: null,
    url: 'http://adm.moeda.in/rest/rastreamento/registrar.php',
    loading: false,
    gps: ""
  };

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('position',position);
        this.setState({
          gps: position.coords.latitude + ',' + position.coords.longitude
        });
      },
      (error) => this.setState({ error: error.message })
    );
  }

  onSuccess = async (e) => {
	  console.log("li o qr", e.data)
    this.setState({ success: true });
    
    const { token } = this.props;
    const { gps } = this.state;
    if (!token) return;
    let body = {tag:base64.encode(e.data), modo:"concluir", gps:gps, data: new Date()}
    this.setState({loading: true});
    const h = {
      'x-api-key': '12345', 
      'Authorization': 'Bearer ' + token
    };
    let mensagem = "";
    let bgColor = "warning";
    let result;
      try {
        result = await axiospost(this.state.url,body,h)
        mensagem = result.data.msg;
        bgColor =  !result.data.ok ? "danger" : "success";
        console.log('resultado',result);
      } catch (err) {
        mensagem = "não foi possível concluir o rastreamento, tente novamente mais tarde";
        bgColor = "danger";
        console.log(err);
      }
      this.props.clickMuda({ msg:mensagem, button:"OK", duration:10000, bgColor:bgColor, position:"top" },'AVISO_TOAST');
      this.props.navigation.navigate('Home');
  };

  render() {
    const { loading } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{flex:1}}>
        <HomeHeader
          title="Iniciar Rastreamento"
          navigation={ navigation }
          retornar={true} />
        { !loading ?
          <View style={styles.container}>
            <QRCodeScanner
              onRead={this.onSuccess}
              showMarker={true}
              checkAndroid6Permissions={true}
              ref={(elem) => { this.scanner = elem }}
              cameraStyle={styles.cameraContainer}
              bottomContent={
                <View style={styles.touchable}>
                  {this.state.success && (
                    <Text style={styles.text}>OK. Got it!</Text>
                  )}
                </View>
              }
            />
          </View>
          :
          <Spinner />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  
  touchable: {
    padding: 16
  },
  
  text: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },
  
  cameraContainer: {
    height: Dimensions.get('window').height,
  }
  
});

export default connect(mapStateToProps,mapDispatchToProps)(RegistraMercadoriaScreen);
