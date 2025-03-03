import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const DynamicGrid = () => {
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
      <Text style = {{fontSize:31,color:"#fff"}}>DynamicGrid</Text>
      <ScrollView>
      <View style = {{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
      
      {
        users.map((item) =><Text style={styles.item}>{item.name}</Text>)
        
      }
      
      </View>
      </ScrollView>
    </View>
  )
}

const styles =  StyleSheet.create ({
    item:{
        fontSize:25,
        backgroundColor:"blue",
        color :"#fff",
        margin:5,
        padding:5,
        width:120,
        height:120,
        textAlignVertical:"center",
        textAlign:"center"


    }
})
export default DynamicGrid