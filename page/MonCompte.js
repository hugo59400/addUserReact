import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Composant/Navbar';

export const MonCompte = ({navigation}) => {
  return (
    <View>
     <Navbar navigation ={navigation}/>
      <Text> Bonjour page compte  </Text>
    </View>
  );
};

export default MonCompte;
