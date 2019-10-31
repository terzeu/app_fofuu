import React, { Component } from 'react'
 
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { Image, Text, H3, List, ListItem, CheckBox, Badge, Left, Right } from 'native-base';
import HomeHeader from '../components/HomeHeader';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  token: store.loggedIn.token,
  avisoToast: store.loggedIn.avisoToast
});
 
class HomeScreen extends Component {

  componentDidMount = () => {
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex:1}}>
        <HomeHeader
          title={<View style={styles.logo}>
                  <Image source={require("../assets/title_fofuu.png")} style={{width:100,height:30}} />
                  <Text style={{color:"white", fontSize:20, paddingLeft:15, fontWeight:"bold"}}>FAMÍLIA</Text>
                </View>
          }
          navigation={ navigation }
          retornar={true} />
        <ScrollView style={styles.container}>
          <View style={{paddingBottom:10}}>
            <H3 style={{color:"#3b3b3b"}}>Atividades Familiares</H3>
            <Text style={{color:"#d92e56"}}>semana 1</Text>
          </View>
          <List>
            <ListItem onPress={()=>{navigation.navigate("Loc")}} noIndent style={{padding:10, backgroundColor:"white", marginBottom:10}}>
                <Left style={{flexDirection:"column"}}>
                  <View>
                    <Badge style={{backgroundColor:"#d92e56"}}>
                      <Text>Atividade 1</Text>
                    </Badge>
                  </View>
                  <Text>
                    aaaaa gggda a d asd a   dadasdasdasdas f asdsafafasf  fadg gag g fa ggf ggf ag saadffa afdafdf fadfa
                  </Text>
                </Left>
                <Right>
                  <CheckBox style={{marginRight:10}} checked={true} />
                </Right>
            </ListItem>
            <ListItem onPress={()=>{navigation.navigate("Loc")}} noIndent style={{padding:10, backgroundColor:"white", marginBottom:10}}>
                <Left style={{flexDirection:"column"}}>
                  <View>
                    <Badge style={{backgroundColor:"#d92e56"}}>
                      <Text>Atividade 1</Text>
                    </Badge>
                  </View>
                  <Text>
                    aaaaa gggda a d asd a   dadasdasdasdas f asdsafafasf  fadg gag g fa ggf ggf ag saadffa afdafdf fadfa
                  </Text>
                </Left>
                <Right>
                  <CheckBox style={{marginRight:10}} checked={false} />
                </Right>
            </ListItem> 
            <ListItem onPress={()=>{navigation.navigate("Loc")}} noIndent style={{padding:10, backgroundColor:"white", marginBottom:10}}>
                <Left style={{flexDirection:"column"}}>
                  <View>
                    <Badge style={{backgroundColor:"#d92e56"}}>
                      <Text>Atividade 1</Text>
                    </Badge>
                  </View>
                  <Text>
                    aaaaa gggda a d asd a   dadasdasdasdas f asdsafafasf  fadg gag g fa ggf ggf ag saadffa afdafdf fadfa
                  </Text>
                </Left>
                <Right>
                  <CheckBox style={{marginRight:10}} checked={true} />
                </Right>
            </ListItem> 
            <ListItem onPress={()=>{navigation.navigate("Loc")}} noIndent style={{padding:10, backgroundColor:"white", marginBottom:10}}>
                <Left style={{flexDirection:"column"}}>
                  <View>
                    <Badge style={{backgroundColor:"#d92e56"}}>
                      <Text>Atividade 1</Text>
                    </Badge>
                  </View>
                  <Text>
                    aaaaa gggda a d asd a   dadasdasdasdas f asdsafafasf  fadg gag g fa ggf ggf ag saadffa afdafdf fadfa
                  </Text>
                </Left>
                <Right>
                  <CheckBox style={{marginRight:10}} checked={false} />
                </Right>
            </ListItem> 
          </List>
        </ScrollView>
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcd9d9',
    padding:10,
  },
  label: {
    margin: 10,
    padding: 5,
  },
  itenMenu: {
    padding: 10,
    flexGrow: 1,
    flexBasis:0
  },
  buttonStyle: {
    backgroundColor:"#1bb969",
    flexDirection:"column",
    minHeight: 100
  }
});

export default connect(mapStateToProps)(HomeScreen);
 
// AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
 
// module.exports = HomeScreen;