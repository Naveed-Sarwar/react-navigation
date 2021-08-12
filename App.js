import 'react-native-gesture-handler';
import { Button, Text, View } from 'react-native'
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
// import route from 'color-convert/route';
import TabNavigation from './src/components/TabNavigation';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            // this title is same for all screens so use default tilte for better use
            // title:"My Homeis", 
            headerStyle: { backgroundColor: "#FFFF00" },
            headerTintColor: "#000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 25 }
          }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
        // this options is for header styling onli
        //        options={
        //         {title:"My Homeis",
        //         headerStyle: {backgroundColor: "#FFFF00"},
        //         headerTintColor: "#000",
        //         headerTitleStyle:{fontWeight: "bold",fontSize: 25}
        // }
        // }
        ></Stack.Screen>
        <Stack.Screen name="Detail"
          // for data show in header like email
          //  options={
          //   ({route})=>({title: route.params.email})
          // }
          component={DetailScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Button onPress={() => { setCount(c => c + 1) }} title="Plus" />
          <Button onPress={() => { setCount(c => c - 1) }} title="Minus" />
        </View>

      )
    })
  }, [navigation, setCount])
  let data = {
    name: "naveed",
    email: "naveed@gmail.com",
    number: "0306-1649235"
  }
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 25 }}>Stack Navigation</Text>
      <Text style={{ fontSize: 25 }}>{count}</Text>
      <Button title="go to detail butto" onPress={() => navigation.push("Detail", data)}></Button>
    </View>
  )
}

function DetailScreen({ route, navigation }) {
  // console.warn(route.params);
  let data = route.params;
  return (
    <View>
      {/* <Text>DetailScreen  is here</Text> */}

      <Text style={{ fontSize: 20 }}>{data.name}</Text>
      <Text style={{ fontSize: 20 }}>{data.email}</Text>
      <Text style={{ fontSize: 20 }}>{data.number}</Text>
      <Button title="Update Title" onPress={() => navigation.setOptions({ title: 'Custom Details' })}></Button>
    </View>
         
  )
}

export default App;

