import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import Card from '../shared/card';
import Card1 from '../shared/card1';

export default function ReviewDetails() {
  
  const [data, setData] = useState([
    { Sp: '1', D: '1', Ac: '1',  An: '15.9', id: '7' },
    { Sp: '2',  D: '1', Ac: '1',  An: '14', id: '6' },
    { Sp: '3', D: '0', Ac: '1',  An: '13', id: '5' },
    { Sp: '4',  D: '1', Ac: '1',  An: '12', id: '4' },
    { Sp: '3',  D: '1', Ac: '-1', An: '2', id: '3' },
    { Sp: '1',  D: '0', Ac: '1',  An: '6', id: '2' },
    { Sp: '0', D: '1', Ac: '-1', An: '0', id: '1' },
  ]);
  const press = ()=> {
    setData((oldData)=> {
      return [
        { Sp: '1', D: '1', Ac: '-1',  An: '15.9', id: '10' },
        { Sp: '2',  D: '1', Ac: '1', An: '14', id: '9' },
        { Sp: '3', D: '0', Ac: '-1',  An: '13', id: '8' },
        ...oldData
      ]
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.Title}> Data Reciving</Text>
      <Card>
      <FlatList
      data={data}
      renderItem={({ item }) => ( 
        <Card1>
          <View style={{flex: 1, flexDirection: 'row', alignContent: 'space-between', alignItems: 'center',}}>
             <Text style={{width: '25%',}} > Sp: {item.Sp} </Text>
             <Text style={{width: '25%',}} > Dir: {item.D} </Text>
             <Text style={{width: '25%',}} > Acc: {item.Ac} </Text>
             <Text style={{width: '25%',}} > An: {item.An} </Text>
          </View>
        </Card1>
          )}
      />
      </Card>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button color='white' fontWeight='bold' title='New Data'  onPress={press} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'powderblue',
    fontSize: 40,
    fontWeight: 'bold'
  },
  Title: {
    alignItems:'center',
    backgroundColor: 'grey',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    height: 60,
    padding: 20,
    borderRadius: 15,
    overflow:'hidden',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    // marginHorizontal: 1,
    // marginVertical: 2,
    },
  alternativeLayoutButtonContainer: {
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'grey',
    marginVertical: 20,
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  });