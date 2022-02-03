import {View, Text} from 'react-native';
import React from 'react';
// etape 1 : . import de NavigationContainer depuis "@react-navigation/native".
import {NavigationContainer} from '@react-navigation/native';
// import de createNativeStackNavigator depuis "@react-navigation/native-stack".
import { createNativeStackNavigator} from '@react-navigation/native-stack';
// 4. creation d'un stack
const Stack = createNativeStackNavigator();
// 6. import des composants pages ci dessous  
import Home from './page/Home';
import Recette from './page/Recette';
import MonCompte from './page/MonCompte';
import AddUser from './page/AddUser';
import ListUser from './page/ListUser';

export const App = () => {
  return (
    // etape 2 du pdf : balise NavigationContainer=  contenant integralite des elements navigables 
    <NavigationContainer>
    {/* 5. appel de la balise Stack.navigator pour ateindre une page */}
     <Stack.Navigator initialRouteName="Home">
     {/* 7. appel d'une page ici premiere page home */}
    <Stack.Screen name='Home' component={Home}/>
 <Stack.Screen name='MonCompte' component={MonCompte}/>
  <Stack.Screen name='Recette' component={Recette}/>
   <Stack.Screen name='AddUser' component={AddUser}/>
   <Stack.Screen name="ListUser" component={ListUser}/>


    </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
