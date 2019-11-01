import React, { Component } from 'react'
import HomeHeader from '../components/HomeHeader'
import Orientation from 'react-native-orientation-locker';
 
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import{ H1, H2, H3, Button, Text } from 'native-base';

import { connect } from 'react-redux';

const mapStateToProps = store => ({
  token: store.loggedIn.token
});
 
class BemVindosScreen extends Component {

  constructor(props) {
		super(props);
    this.state = {}
  }

  componentDidMount = () => {
    
  }

  render() {
    Orientation.lockToPortrait();
    const { navigation } = this.props;
    return (
      <View style={{flex:1, backgroundColor:"#d92e56"}}>
        <HomeHeader
          title=""
          navigation={ navigation }
          bgColor="transparent"
          retornar={true} />
          <View style={styles.container}>
            <H1 style={styles.h1Text}>Bem-vindos ao</H1>
            <View style={styles.logo}>
							<Image source={require("../assets/title_fofuu.png")} style={{width:200,height:70}} />
							<Text style={{color:"white", fontSize:20, paddingLeft:15, fontWeight:"bold"}}>FAMÍLIA</Text>
						</View>
            <H3 style={styles.h3Text}>Uma extenção do Fofuuu Fono que oferece uma rotina de brincadeiras e atividades com o objetivo de desenvolver habilidades específicas das crianças com necessidades especiais, fortalecendo os laços entre pais e filhos!</H3>
            <Button onPress={(e)=>{this.props.navigation.navigate('Home')}} style={{color:"white", borderColor:"white", alignSelf:"flex-end"}} rounded outline bordered>
              <Text style={{color:"white"}}>Continuar</Text>
            </Button>
          </View>
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
      color:"white",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 50
    },
    h1Text:{
      color:"white",
      padding:15
    },
    h3Text:{
      color:"white",
      textAlign:"center",
      lineHeight: 25,
      marginBottom:30
    },
    logo: {
      marginBottom:20
    }
});
 
export default connect(mapStateToProps)(BemVindosScreen);
 
// module.exports = BemVindosScreen;