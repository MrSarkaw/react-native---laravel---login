import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setUser } from '../redux/user/action'
import { useSelector, useDispatch } from 'react-redux'

export default function Login() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user.user)

  const login = () => {
    dispatch(setUser('sarkaw'))
  }
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
        <View style={{ backgroundColor: "white", padding: 10, width: "80%", borderRadius: 10 }}>
          <Text style={{ fontSize: 20 }}>Login Page</Text>
          <Text style={{ fontSize: 30 }}>{user}</Text>
          <View style={{ marginTop: 30 }}>
            <Text>Email</Text>
            <TextInput style={style.input} />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text>Password</Text>
            <TextInput secureTextEntry={true} style={style.input} />
          </View>

          <View style={{ marginTop: 15 }}>
            <TouchableOpacity onPress={() => { login() }} style={[style.input, { width: "20%" }]}>
              <Text style={{ color: 'white', textAlign: "center" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  input: {
    backgroundColor: "#6699cc", padding: 7, borderRadius: 6
  }
})

