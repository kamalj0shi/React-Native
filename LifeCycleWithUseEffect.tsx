import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const LifeCycleWithUseEffect = () => {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(100);

  // useEffect(() =>{
  //     console.warn("do some animation")
  // },[count])

  // useEffect(() =>{
  //     console.warn("call some API here")
  // },[data])

  return (
    <View>
      <Text style={{fontSize: 20, color: '#fff'}}>
        {data} Life Cycle With Use Effect {count}
      </Text>
      <Button title="Update count" onPress={() => setCount(count + 1)}></Button>

      <Button title="Update data" onPress={() => setData(data + 1)}></Button>
      <User info={{data, count}} />
    </View>
  );
};

const User = (props) => {
  useEffect(() => {
    console.warn('run this code when data prop is upadted');
  }, [props.info.data]);
  
  useEffect(() => {
    console.warn('run this code when count prop is upadted');
  }, [props.info.count]);

  return (
    <View>
      <Text style={{fontSize: 30, color: 'orange'}}>
        data: {props.info.data}
      </Text>
      <Text style={{fontSize: 30, color: 'orange'}}>
        count: {props.info.count}
      </Text>
    </View>
  );
};

export default LifeCycleWithUseEffect;
