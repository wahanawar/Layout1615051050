import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.head}>
          <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }} >
          Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.slider}>
          <Text style={styles.text}>Slider</Text>
        </View>
        <View style={styles.isiBtn}>
          <View style={styles.btn1}>
            <View style={styles.button}><Text> L </Text></View>
            <View style={styles.button}><Text> O </Text></View>
            <View style={styles.button}><Text> V </Text></View>
            <View style={styles.button}><Text> E </Text></View>
          </View>
          <View style={styles.btn2}>
            <View style={styles.button}><Text> L </Text></View>
            <View style={styles.button}><Text> I </Text></View>
            <View style={styles.button}><Text> F </Text></View>
            <View style={styles.button}><Text> E </Text></View>
          </View>
          <View style={styles.footer}>
            <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }} >
            #JaenKuliahdiPTI</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#2979FF',
    flex: 1,
    flexDirection: 'column'
  },
  head: {
    flex: 1, //
    backgroundColor: '#0091EA',
    marginTop: 25,
    justifyContent: 'center',

  },
  slider: {
    flex: 6,
    backgroundColor: '#B3E5FC',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn1: {
    flex: 4,
    backgroundColor: '#7986CB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  btn2: {
    flex: 4, // lebar box lebih besar dari 2
    backgroundColor: '#7986CB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#E8EAF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isiBtn: {
    flex: 9,
    backgroundColor: '#303F9F'
  },
  footer: {
    flex: 1, // lebar box lebih besar dari 2
    backgroundColor: '#0D47A1',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25
  },
});
