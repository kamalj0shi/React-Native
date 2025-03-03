import React from 'react';
import {Text, View, StyleSheet, useColorScheme, Image,Button}from 'react-native';
import CollegeData from "./components/CollegeData";

let age = 24
function fruit () {
    return "appple"
}

const AppPro = () => {
  return (
    <View>
      <Text>Hello!</Text>
      <Text>Hello! this is pnkaj</Text>

      <Image
        style={{width: 300, height: 200}}
        source={{
          uri: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=action-asphalt-auto-210019.jpg&fm=jpg',
        }}
        />
      <Button title='press me'></Button>  
      <Text>my age is :{age}</Text> 
      <Text>{fruit()}</Text> 
      <Text>{100+300}</Text> 
      <Text>{100*300}</Text> 
      <Text>{age === 24?"above 30" :"unknown age"}</Text> 
      <Button title='press me too'></Button> 
      <UserData/>  
      <UserData/>  
      <UserData/>  
      <UserData/> 
      <CollegeData/> 
    </View>
  );
};

const UserData = () => {
    return(
        <View>
            <Text style = {{fontSize:30,color:"#fff"}}>components</Text>
        </View>
    )
}




export default AppPro;
