import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';

export const ListUser = ({navigation}) => {
  const [users, setUser] = useState([]);

  const addUser = (newUser) => {
    setUser([...users, newUser]);
    console.warn('utilisateur ajoute');
  };

  const handleAddUser = () => {
    navigation.navigate("AddUser", {addUser: addUser});
  };
// mettre tableau users a vide 
  const handleClear = () => {
    setUser([]);
        console.warn('tous les users supprimes');
  };

  return (
    <View>
    {/* .map pr boucler sur le tableau des users et les afficher */}
      {users.map(user => (
        <View>
          <Text>
            nom: {user.nom} et prenom: {user.prenom}
          </Text>
        </View>
      ))}
      {/* boutons pour ajouter et effacer utilisers  */}
      <Button title="Ajouter User" onPress={handleAddUser} />
      <Button title="Effacer la liste user " onPress={handleClear} />
    </View>
  );
};
export default ListUser;