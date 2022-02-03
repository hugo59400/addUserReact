import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Composant/Navbar';
// stringify pas obligatoire ici 
export const Home = ( {route, navigation} ) => {
    const {nom}=route.params || "";
  return (
    <View>
    <Navbar navigation ={navigation}/>
      <Text> Bonjour page home </Text>
     
      <Text> mon nom est  {JSON.stringify(nom) } </Text>

    </View>
  );
};

export default Home;
