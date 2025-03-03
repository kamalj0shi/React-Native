import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const User = (props) => {
    
  return (
    <View>
      <Text style ={{backgroundColor:"green", fontSize:30,padding:20}}>child component is :{props.name}</Text>
    </View>
  )
}

export default User

