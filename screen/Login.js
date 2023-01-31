import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setUser } from '../redux/user/action'
import { useSelector, useDispatch } from 'react-redux'
import axios from '../axios';



export default function Login() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user.user)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState([])

  const login = () => {
    setError([])
    axios.post('login', form).then(({ data }) => {
      dispatch(setUser(data.user))
    }).catch((err) => {
      setError(err.response.data.errors)
    })
  }
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
        <View style={{ backgroundColor: "white", padding: 10, width: "80%", borderRadius: 10 }}>
          <Text style={{ fontSize: 20 }}>Login Page</Text>
          <Text style={{ fontSize: 30 }}>{user.email}</Text>
          <Text style={{ color: 'red', fontSize: 16, marginTop: 18 }}>{error?.message ? error.message : ''}</Text>
          <View style={{ marginTop: 10 }}>
            <Text>Email</Text>
            <TextInput onChangeText={(text) => { form.email = text }} style={style.input} />
            <Text style={{ color: 'red' }}>{error?.email ? error.email[0] : ''}</Text>
          </View>

          <View style={{ marginTop: 0 }}>
            <Text>Password</Text>
            <TextInput onChangeText={(text) => { form.password = text }} secureTextEntry={true} style={style.input} />
            <Text style={{ color: 'red' }}>{error?.password ? error.password[0] : ''}</Text>
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

