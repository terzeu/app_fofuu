/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Image
} from 'react-native'
import { Header, Icon, Title, Body, Right, Left, Button, Text } from "native-base";
import { connect } from 'react-redux';
import HomeScreen from '../pages/QRScanScreen';

function mapDispatchToProps(dispatch) {
    return({
        clickMuda: (item,tipo) => {
            dispatch({ type: tipo, valor:item})
        }
    });
}

class HomeHeader extends Component {
	constructor(props) {
		super(props)
        this.state = {};
        this.handleDeslogar = this.handleDeslogar.bind(this);
	}


	componentDidMount() {
    }
    
    handleDeslogar() {
        const { navigation } = this.props;
        this.props.clickMuda(null,'LOGGED_OUT')
        navigation.navigate("Home");
    }

    render() {
        const { navigation, title, retornar, bgColor } = this.props;

        return (
        <View>
            <Header noShadow androidStatusBarColor={'#d92e56'} style={{backgroundColor:bgColor}}>
                {retornar &&
                    <Left>
                        <Button transparent onPress={() =>{navigation.navigate("Home", {back: true})}}>
                            <Icon name="ios-arrow-back"  style={{fontSize: 30, color:'#fff'}}/>
                        </Button>
                    </Left>
                }
                <Body>
                    <View>
                        <Image source={require("../assets/title_fofuu.png")} style={{width:100,height:25}} />
                        <Text style={{color:"white", fontSize:15, paddingLeft:15, fontWeight:"bold"}}>FAMÍLIA</Text>
                    </View>
                </Body>
            </Header>
        </View>
        )
    }
}

const styles = StyleSheet.create({
})

HomeHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
  retornar: PropTypes.bool
}

HomeHeader.defaultProps = {
    bgColor: "#d92e56"
}

export default connect(null,mapDispatchToProps)(HomeHeader);
