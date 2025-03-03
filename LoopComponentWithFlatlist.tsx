import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const LoopComponentWithFlatlist = () => {
  const users1 = [
    {id: 1, name: 'Anil', email: 'abc@test.com'},
    {id: 2, name: 'Sam', email: 'abc@test.com'},
    {id: 3, name: 'Peter', email: 'abc@test.com'},
  ];

  return (
    <View>
      <Text style={{fontSize: 25, color: '#fff'}}>
        Component in loop with FlatList
      </Text>
      <FlatList 
      data={users1} 
      renderItem={({item}) => <UserData item = {item} />} />
    </View>
  );
};

const UserData = (props) => {
    const item = props.item
  return (
    <View style={newStyle.box}>
      <Text style={newStyle.item}>{item.name}</Text>
      <Text style={newStyle.item}>{item.email}</Text>
    </View>
  );
};

const newStyle = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'orange',
    flex: 1,
    margin: 2,
    backgroundColor: 'green',
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
  },
});

export default LoopComponentWithFlatlist;
