import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import mocks from './mocks.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemView = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemPrice}>
        {item.price}{' '}
        <Text style={styles.airport}> {item.airport}</Text>
      </Text>
      <View style={styles.itemFooter}>
        <Text style={styles.itemText}>
          <Ionicons name="ios-calendar" style={styles.icon} />
          {'  '}
          {item.time}
        </Text>
        <Text style={styles.itemText}>
          <Ionicons name="ios-airplane" style={styles.icon} />
          {'  '}
          {item.airline}
        </Text>
      </View>
    </View>
  );
};

const ListSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        {mocks.map(item => {
          return <ItemView item={item} />;
        })}
      </View>
    </View>
  );
};

export default ListSearch;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    padding: 10,
    backgroundColor: '#fff',
  },
  itemText: {
    color: '#24333A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemContainer: {
    borderWidth: 1.5,
    borderColor: '#EFEFF0',
    marginBottom: 12,
    padding: 20,
    borderRadius: 12,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D1820',
    marginBottom: 10,
  },
  airport: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#828595',
  },
  containerBody: {
    marginTop: 15,
  },
  icon: {
    marginRight: 10,
  },
});
