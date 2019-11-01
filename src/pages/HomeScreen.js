import React, { Component } from "react";
import PropTypes from 'prop-types'
import {
	View,
	Image,
    Text,
    Button,
    StyleSheet,
	ImageBackground,
	TouchableHighlight,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';

import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return({
        clickMuda: (item,tipo) => {
            dispatch({ type: tipo, valor:item})
        }
    });
}

export class HomeScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		
	}


	render() {
		Orientation.lockToLandscape();
		return (
			<ImageBackground source={require("../assets/back_fofuu.png")} style={{width: '100%', height: '100%', flexDirection:"column-reverse"}}>
				<View style={styles.content} on>
					<TouchableHighlight onPress={()=>{this.props.navigation.navigate('BemVindos')}}>
						<View>
							<Image source={require("../assets/title_fofuu.png")} style={{width:200,height:70}} />
							<Text style={{color:"white", fontSize:20, paddingLeft:15, fontWeight:"bold"}}>FAMÍLIA</Text>
						</View>
					</TouchableHighlight>
				</View>
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	content: {
        justifyContent: 'center',
		padding: 20
	},
})

HomeScreen.propTypes = {
	navigation: PropTypes.object.isRequired
}

export default connect(null,mapDispatchToProps)(HomeScreen);
