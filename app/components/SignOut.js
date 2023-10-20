import React from "react";
import { View ,Text ,Button,BackHandler,Alert,StyleSheet} from "react-native";


const SignOut = ({navigation}) =>{
    handleBackPress = () =>{
        Alert.alert(
          'Exit App',
          "Existing the application?",
        [
          {
            text : 'Cancel',
            onPress :() =>{
              console.log("Cancel Pressed")
            },
            style : 'cancel',
          },
          {
            text : "OK",
            onPress : () => BackHandler.exitApp(),
          },
        ],
        {
          cancelable : false,
        },)
        return true
      }
      BackHandler.addEventListener('hardwareBackPress',handleBackPress)
    return (
    <View style={styles.container}>
        <View style={styles.view1}>
            <Button  title="Sign Out" onPress={()=>navigation.navigate('alreadyLogin')}></Button>
        </View>
        <View style={styles.view1}>
            <Button  title="Home Page" onPress={()=>navigation.navigate('HomeAbout')}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
    
    view1 : {
        flex : 2,
        justifyContent : "center",
        alignItems : "center",
        flexDirection : 'row'
    },

})


export default SignOut