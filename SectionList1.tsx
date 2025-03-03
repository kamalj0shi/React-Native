import {View, Text, SectionList} from 'react-native';
import React from 'react';

const SectionList1 = () => {
  const users = [
    {
      id: 1,
      name: 'Pankaj',
      data: ['PHP', 'React js', 'Angular'],
    },
    {
      id: 2,
      name: 'Kamal',
      data: ['java', 'JS', 'HTML'],
    },
    {
      id: 3,
      name: 'Bruce',
      data: ['C', 'C++', 'Python'],
    },
    {
      id: 4,
      name: 'Tony',
      data: ['CSS', 'Bootstrap', 'HTML'],
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 25, color: '#fff'}}>Section list</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 25, color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  );
};

export default SectionList1;
