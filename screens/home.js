import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('ReviewDetails');
   }
  const ppress = () => {
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}> Welcome to Car Communicator </Text>
      <Text style={Styles.titleT}>This app is designed to communicate with smart driving modeling</Text>
      <View style={Styles.alternativeLayoutButtonContainer}>
      <Button color='white' fontWeight='bold' title=' Data Screen' onPress={pressHandler} />
      </View>
      <View style={Styles.ButtonContainer}>
      <Button color='white' fontWeight='bold' title=' Run AI' onPress={ppress} />
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'powderblue',
    fontSize: 40,
    fontWeight: 'bold'
  },
  titleText: {
    backgroundColor: 'grey',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    height: 60,
    padding: 20,
    borderRadius: 10,
    overflow:'hidden',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  titleT: {
    flex: 0.8,
    fontSize: 18,
    backgroundColor: "powderblue",
    padding: 40,
    alignItems: 'center',
  },
  alternativeLayoutButtonContainer: {
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginTop: 14,
    padding: 10,
    backgroundColor: 'grey',
    marginVertical: 10,
    borderRadius: 10,
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  ButtonContainer: {
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'grey',
    marginVertical: 10,
    borderRadius: 10,
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  }
});