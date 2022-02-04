import {Pressable, StyleSheet, Text, View,Button} from 'react-native';
import React from 'react';

export const Navbar = ({navigation}) => {
// handleBack est appele sur le bouton retour en arriere 
   const handleBack = () => {
       navigation.goBack();
    }
   //fonction qui redirige vers page home avec un parametre nom affiche dans cette page 
    const handleHome = () => {
        navigation.navigate("Home",{nom:"hugo"})
    }
    //fonction qui redirige vers page MonCompte
    const handleMonCompte = () => {
        navigation.navigate("MonCompte")
    }
        //fonction qui redirige vers page Recette

    const handleRecette = () => {
        navigation.navigate("Recette")
    }
    

      const handleAddUser = () => {
        navigation.navigate("AddUser")
    }
      
      // fonction qui redirige vers page qui ajoute user et liste les users 
         const handleListUser = () => {
        navigation.navigate("ListUser")
    }


  return (
    <View>
      <Text></Text>
//       <Pressable
//         style={({pressed}) => ({
   //           backgroundColor: pressed ? '#ff0000' : '#00ffff',
//         })}
//         onPress={handleHome}>
//         <Text>Page Home</Text>
//       </Pressable>

//       <Pressable
//         style={({pressed}) => ({
//           backgroundColor: pressed ? '#ff0000' : '#00ffff',
//         })}
//         onPress={handleMonCompte}>
//         <Text>Page Mon compte</Text>
//       </Pressable>

//       <Pressable
//         style={({pressed}) => ({
//           backgroundColor: pressed ? '#ff0000' : '#00ffff',
//         })}
//         onPress={handleRecette}>
//         <Text>Page Recette</Text>
//       </Pressable>


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
     
      <Button title="retour en arriere" onPress={handleBack}/>
    </View>
  );
};

export default Navbar;

