import React, { Component } from 'react'
 
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { Image, Text, H3, H2, List, ListItem, Item, Input, Icon, Textarea, Button } from 'native-base';
import HomeHeader from '../components/HomeHeader';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  token: store.loggedIn.token,
  avisoToast: store.loggedIn.avisoToast
});
 
class LocationScreen extends Component {

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
          <View style={{padding:10}}>
            <H3 style={{color:"#3b3b3b"}}>Atividade 2</H3>
            <Text style={{color:"#d92e56"}}>semana 1</Text>
          </View>
          <List>
            <ListItem noIndent style={{paddingHorizontal:10, paddingTop:20, paddingBottom:20, backgroundColor:"white", marginBottom:10}}>
                <H3>
                  aa asdasda kivii n  gyf ag ag aydgasydasygdagsda asdasdyasgydasdga adasdgasuyc g c cg c g gcgxg cx xgczyczcz  cgc yzc zc zx
                </H3>
            </ListItem>
            <ListItem noIndent style={{paddingHorizontal:10, paddingTop:20, paddingBottom:20, backgroundColor:"white", marginBottom:10, flexDirection:"column", alignItems:"flex-start"}}>
              <H2 style={{marginBottom:10}}>
                Observações
              </H2>
              <Item rounded>
                <Textarea style={{height:150, flexWrap:"wrap"}} placeholder='O que você e seu filho acharam da atividade? Insira aqui seu feedback!'/>
              </Item>
              <Button success onPress={(e)=>{navigation.navigate("Home")}} style={{marginTop:20, alignSelf:"flex-end"}} rounded bordered>
                <Icon type="FontAwesome" name='check' />
                <Text>Concluir</Text>
              </Button>
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

export default connect(mapStateToProps)(LocationScreen);
