import {View, Text, TextInput, StyleSheet,Button} from 'react-native';
import React, { useState } from 'react';

const Text_input = () => {
  const [name,setName] = useState("")

  return (
    <View>
      <Text style={{fontSize: 30, backgroundColor: '#fff'}}> Handle Text-input</Text>

      <Text style={{fontSize: 30, backgroundColor: '#fff'}}>Your name is : {name}</Text>

      <TextInput style={styles.text_input} placeholder="Enter your name"
      onChangeText={(text)=>setName(text)}
      value={name}
       />

       <Button title='Clear Input Value' onPress={()=>setName('')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text_input: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'yellow',
    margin: 10,
  },
});

export default Text_input;
