import {View, Text,FlatList, StyleSheet} from 'react-native';
import React from 'react';

const List = () => {
  const users = [
    {
      id: 1,
      name: 'pankaj',
      email:"18778eh"
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
      name: 'rohit',
    },
  ];
  return (
    <View>
      <Text style={{ fontSize:31 }}>List with Flatlist component</Text>
      <FlatList
        data={users}
        renderItem={({item}) =><Text style={styles.item}> {item.name}</Text>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={{height:20}}/>}
        numColumns={2}
        columnWrapperStyle={{gap:10,justifyContent:'space-evenly'}}
        // horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create ({
    item:{
        fontSize:24,
        padding:10,
        color:"#fff",
        backgroundColor:"blue",
        borderColor:"black",
        borderWidth:2,
        margin:10
    }

})

export default List;
