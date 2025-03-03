import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const Show_hide_toggle_of_component = () => {
    const [show, setShow] = useState(false);

    return (
        <View>
            <Text style={{ fontSize: 25, color: 'green' }}>show/hide component</Text>

            {/* <Button title='Show Component' onPress={()=>setShow(true)}></Button>
      <Button title='Hide Component' onPress={()=>setShow(false)}></Button> */}

            <Button title="Toggle Component" onPress={() => setShow(!show)}></Button>

            {show ? <User /> : null}
        </View>
    );
};

const User = () => {
    let interval = setInterval(() => {
        console.warn('TImer called');
    }, 3000);

    useEffect(() => {
        console.log("component get mount or dependance item state update")
        return () => {
            clearInterval(interval)
            console.log('component will unmount method || clean up function');
        };
    });

    return (
        <View>
            <Text style={{ fontSize: 30, color: 'red' }}>User Component</Text>
        </View>
    );
};

export default Show_hide_toggle_of_component;
