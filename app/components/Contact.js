import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from 'expo-checkbox';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions ,Button,ActivityIndicator, Pressable,StatusBar, Platform, Alert} from 'react-native';

const Contact = ({navigation}) => {

  navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [emailError,setEmailError] = useState('')
  const [password, setPassword] = useState('');
  const [PasswordError,setPasswordError] = useState('')
  const [name, setName] = useState('');
  const [NameError,setNameError] = useState('')
  const [agree,setagree] = useState(false)





  const handleRegister = async() => {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Name:', name);

    if(!name){
      setNameError("Username is required...")
      return;
    }else{
      setNameError("")
    }
    if(!email){
      setEmailError("Email is required...")
      return;
    }else{
      setEmailError("")
    }
    if(!password){
      setPasswordError("Password is required...")
      return;
    }else{
      setPasswordError("")
    }

    

      await AsyncStorage.setItem('NAME',name)
      await AsyncStorage.setItem('EMAIL',email)
      await AsyncStorage.setItem('PASSWORD',password)

      navigation.navigate("alreadyLogin")
  
    setEmail("")
    setName("")
    setPassword("")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      

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
          placeholder="Email"
          value={email}
          onChangeText={(ind)=>setEmail(ind)}
          keyboardType="email-address"
          autoCapitalize='none'
          autoCorrect = {false}

        />
        <Text style={styles.errorText}>{emailError}</Text>
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
          <View style={styles.tick}>
          <Checkbox
            value={agree}
            onValueChange={()=>setagree(!agree)}
            color={agree?"#4630EB" : undefined}
          />
          <Text style={styles.termscondition}>I read all terms and conditions...</Text>

          </View>
        <TouchableOpacity style={[styles.button,{
          backgroundColor : agree ? "red" : "grey",
        },
                  
         ]}
         onPress={handleRegister} disabled={!agree}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
         <Text style={styles.already} onPress={()=>navigation.navigate("alreadyLogin")}> Already Login??</Text>


      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  formContainer: {
    width: '80%',
    maxWidth: Dimensions.get('window').width * 0.8,
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
  already : {
    flex : 4
  },
  tick : {
    flex : 2,
    flexDirection : "row",
  },
  termscondition : {
    paddingLeft : 10,
    fontWeight : "bold",
    fontSize : 15
  }

});

export default Contact;

// expo-cli start --tunnel