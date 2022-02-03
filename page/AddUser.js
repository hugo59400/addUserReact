import {Button, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export const AddUser = ({route, navigation}) => {
    // variable nom et prenom en hooks 
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
// pr recupere les parametres via route.params
  const {addUser} = route.params || '';
 
  const handleNom = (value) => {
    setNom(value);
  };

  const handlePrenom = (value) => {
    setPrenom(value);
  };

  const ajoutUser = () => {
    route.params.addUser({
      nom: nom,
      prenom: prenom,
    });
    // fonction qui permet de revenir en arriere
    navigation.goBack();
  };

  return (
    <View>
    {/* input nom  */}
      <TextInput
        onChangeText={handleNom}
        placeholder="nom"
      />
      {/* input prenom  */}
      <TextInput
        onChangeText={handlePrenom}
        placeholder="prenom"
        
      />
      <Button title="Ajouter User" onPress={ajoutUser} />
    </View>
  );
};
export default AddUser;