import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text,View,Button,TextInput,Alert, BackHandler } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SignOut } from "./SignOut";


const Tab = createMaterialTopTabNavigator()



const HomeAbout = (props) =>{
  // console.warn(props)
    // const Navigation = useNavigation()
    // useEffect(()=>{
    //   const unsuscribe = Navigation.addListener('beforeRemove',e=>{
    //     e.preventDefault()
    //     Alert.alert("Reload to go back to Login Page")
    //   })
    // },[Navigation])

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="About" component={About}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}



const Home = (props) => {
    // const {name,email} = props.route.params
    // console.warn(props.route.params)

    
  
  
  
  
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Home Screen </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Name :  </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>email : </Text>
          
          {/* <Button title="sign-out" onPress={signOut}/> */}
  
  
  
          {/* <Button title="sign out" onPress={()=>navigation.goBack()}/> */}
          {/* <Button
            title="Go to About Page"
            onPress={() => props.navigation.navigate("Login")}
          ></Button> */}
        </View>
      );
    };


const About = () =>{
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:25}}>
              Back Button is closing the app because of strict pagintaion..
            </Text>
        </View>
    )
}

export default HomeAbout

// how to make a navigate from the nested tab navigatior to stack navigator in react native