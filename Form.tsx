import {
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setDisplay(false)
    setEmail('')
    setName('')
    setPassword('')
  }

  return (
    <View>
      <Text style={{fontSize: 30}}> simple Form in react-native</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Enter User Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={Styles.textInput}
        placeholder="Enter User Password"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        value={password}
      />
      <TextInput
        style={Styles.textInput}
        placeholder="Enter User Email"
        onChangeText={email => setEmail(email)}
        value={email}
      />

      <View style={{marginBottom: 10}}>
        <Button
          title="Print Details"
          color={'green'}
          onPress={() => setDisplay(true)}
        />
      </View>

      <Button title="Clear Details" onPress={resetFormData}/>

      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 20}}>username is :{name}</Text>
            <Text style={{fontSize: 20}}>user password is :{password}</Text>
            <Text style={{fontSize: 20}}>user email is:{email}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
    backgroundColor: 'grey',
  },
});

export default Form;
