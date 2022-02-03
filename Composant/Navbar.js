import {Pressable, StyleSheet, Text, View,Button} from 'react-native';
import React from 'react';

export const Navbar = ({navigation}) => {
// bouton go back Button appel 
   const handleBack = () => {
       navigation.goBack();
    }
    const handleHome = () => {
        navigation.navigate("Home",{nom:"hugo"})
    }
    const handleMonCompte = () => {
        navigation.navigate("MonCompte")
    }
    const handleRecette = () => {
        navigation.navigate("Recette")
    }

      const handleAddUser = () => {
        navigation.navigate("AddUser")
    }
         const handleListUser = () => {
        navigation.navigate("ListUser")
    }


  return (
    <View>
      <Text></Text>
      <Pressable
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ff0000' : '#00ffff',
        })}
        onPress={handleHome}>
        <Text>Page Home</Text>
      </Pressable>

      <Pressable
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ff0000' : '#00ffff',
        })}
        onPress={handleMonCompte}>
        <Text>Page Mon compte</Text>
      </Pressable>

      <Pressable
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ff0000' : '#00ffff',
        })}
        onPress={handleRecette}>
        <Text>Page Recette</Text>
      </Pressable>


         {/* <Pressable
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ff0000' : '#00ffff',
        })}
        onPress={handleAddUser}>
        <Text>Page add users </Text>
      </Pressable> */}

     <Pressable
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ff0000' : '#00ffff',
        })}
        onPress={handleListUser}>
        <Text>Add and  List users </Text>
      </Pressable>
     
      <Button title="go back " onPress={handleBack}/>
    </View>
  );
};

export default Navbar;

