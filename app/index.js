import Contact from "./components/Contact";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeAbout from "./components/HomeAbout";
import SignOut  from "./components/SignOut";
import Login from "./components/Login";
const Stack = createNativeStackNavigator();





  



const App = () => {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Contact} options={{
              title : "Register",
              headerStyle:{
                backgroundColor:"yellow"
              }
            }}/>
            <Stack.Screen name = "alreadyLogin" component={Login} options={{
              title : "Login",
              headerStyle : {
                backgroundColor : "yellow"
              },  
              headerLeft : () =>{
                return <></>
              }
            }}/>

            <Stack.Screen name="signout" component={SignOut} options={{
              headerLeft : () =>{
                return <></>
              }
            }}/>  

            <Stack.Screen name="HomeAbout" component={HomeAbout} options={{
              title:"Home",
              headerStyle:{
                backgroundColor : "yellow"
              },
            }} />

              
        </Stack.Navigator>
    </NavigationContainer>  
  );
};


export default App;



// 7 hour 6 min