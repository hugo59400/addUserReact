import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Composant/Navbar';

export const Recette = ({navigation}) => {
  return (
    <View>
    <Navbar navigation ={navigation}/>
      <Text> Bonjour page recette  </Text>
    </View>
  );
};

export default Recette;
