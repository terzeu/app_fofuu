import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { startNFC, stopNFC } from "../utils/NFCHelper";
import HomeHeader from '../components/HomeHeader'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      titleMessage: "Aproxime o dispositivo a uma tag NFC",
      descriptionMessage: "Aguardando aproximação...",
      tagValue: null
    };
  }

  componentDidMount() {
    startNFC(this.handleNFCTagReading);
  }

  componentWillUnmount() {
    stopNFC();
  }

  handleNFCTagReading = nfcResult => {
    if (nfcResult.Error) {
      this.setState({
        titleMessage: nfcResult.Error.Title,
        descriptionMessage: nfcResult.Error.Message
      });
    } else {
      this.setState({ tagValue: nfcResult.tagValue });
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex:1}}>
        <HomeHeader
          title="NFC Tag"
          navigation={ navigation }
          retornar={true} />
        <View style={styles.container}>
          <Text style={styles.headerMessage}>NFC Tag Reader</Text>
          <Text style={styles.titleMessage}>{this.state.titleMessage}</Text>
          <Text style={styles.descriptionMessage}>
            {this.state.descriptionMessage}
          </Text>
          {this.state.tagValue ? (
            <Text style={styles.tagValue}>
              Tag encontrada: {this.state.tagValue}
            </Text>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  headerMessage: {
    fontWeight: "bold",
    fontSize: 32
  },
  titleMessage: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 34
  },
  descriptionMessage: {
    fontWeight: "normal",
    fontSize: 16,
    marginTop: 12,
    textAlign: "center"
  },
  tagValue: {
    fontWeight: "normal",
    fontSize: 16,
    marginTop: 18,
    color: "#77D353"
  }
});