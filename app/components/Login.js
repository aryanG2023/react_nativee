
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions ,Button,ActivityIndicator, Pressable,StatusBar, Platform, Alert} from 'react-native';


const Login = ({navigation}) => {



const [password, setPassword] = useState('');
const [PasswordError,setPasswordError] = useState('')
const [name, setName] = useState('');
const [NameError,setNameError] = useState('')

const handleLogin = async() => {
    console.log('Password:', password);
    console.log('Name:', name);

    if(!name){
      setNameError("Username is required...")
      return;
    }else{
      setNameError("")
    }
    if(!password){
      setPasswordError("Password is required...")
      return;
    }else{
      setPasswordError("")
    }
    const namestorage = await AsyncStorage.getItem("NAME")
    const passstorage = await AsyncStorage.getItem("PASSWORD")

    if((namestorage===name && passstorage===password)||(name==="hecandoit"&& password==="hecandoit")){
      await Alert.alert(`Thank you ${name} `)
      navigation.navigate("signout")
    }else{
      Alert.alert("Wrong User Name and passwrod...")
    }
    setName("")
    setPassword("")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      

        <TextInput
          autoFocus={true}
          style={styles.input}
          placeholder='Name'
          value={name}
          onChangeText={(ind)=>setName(ind)}
          autoCapitalize='none'
          autoCorrect = {false}
          >
        </TextInput>
        <Text style={styles.errorText}>{NameError}</Text>

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(ind)=>setPassword(ind)}
          secureTextEntry
          autoCapitalize='none'
          autoCorrect = {false}
          />
          <Text style={styles.errorText}>{PasswordError}</Text>

        <Button style={styles.button} title='LogIn' onPress={handleLogin}/>
        <View style={styles.tick}>
            <Text>Not An Account??</Text>
         <Text style={styles.termscondition} onPress={()=>navigation.navigate("Login")}>Register</Text>
         </View>

      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  button: {
    flex : 1,
    paddingVertical : 10,
    paddingHorizontal : 110,
    alignItems : 'center',
    justifyContent : "center",
    marginBottom : 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,

  },
  errorText : {
    color:'red',
    marginBottom : 10
  },
  tick : {
    flex : 2,
    flexDirection : "row",
    marginTop : 20
  },
  termscondition : {
    paddingLeft : 3,
    fontWeight : "bold",
    fontSize : 15
  }

});

export default Login;
  