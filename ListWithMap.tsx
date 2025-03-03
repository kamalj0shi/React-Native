import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ListWithMap = () => {
  const users = [
    {
      id: 1,
      name: 'pankaj',
      email: '18778eh',
    },
    {
      id: 2,
      name: 'kamal',
    },
    {
      id: 3,
      name: 'aditya',
    },
    {
      id: 4,
      name: 'subodh',
    },
    {
      id: 10,
      name: 'beena',
    },
    {
      id: 11,
      name: 'rohit',
    },
    {
      id: 12,
      name: 'neelam',
    },
    {
      id: 13,
      name: 'avantika',
    },
    {
      id: 14,
      name: 'rakesh',
    },
    {
      id: 15,
      name: 'deepak',
    },
    {
      id: 16,
      name: 'neeraj',
    },
    {
      id: 17,
      name: 'sunil',
    },
    {
      id: 18,
      name: 'aman',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 25, color: '#fff'}}>
        custom list with the help of Map function
      </Text>
      <ScrollView style ={{marginBottom:60}}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});

export default ListWithMap;
