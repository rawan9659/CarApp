import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card1(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { props.children }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
   flex:0.25,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'powderblue',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    marginHorizontal: 4,
    marginVertical: 6,
    },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
   },
});