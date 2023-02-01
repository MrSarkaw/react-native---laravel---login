import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux'
import axios from '../axios';

export default function Home({navigation}) {
  const user = useSelector((store) => store.user.user)
  return (
    <View style={{ alignItems:"center", justifyContent:"center", height:'100%' }}>
      <View style={{backgroundColor:"white", padding:10, borderRadius:10}}>
        <Text>welcome: {user.email}</Text>

        <TouchableOpacity onPress={async ()=>{
          await axios.post('logout');
          navigation.navigate('login')
        }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
