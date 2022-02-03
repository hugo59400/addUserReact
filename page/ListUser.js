import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';

export const ListUser = ({navigation}) => {
  // tableau de users initialise a vide a sa creation 
  const [users, setUser] = useState([]);

  const addUser = (newUser) => {
    setUser([...users, newUser]);
    console.warn('utilisateur ajoute');
  };

  const handleAddUser = () => {
    navigation.navigate("AddUser", {addUser: addUser});
  };
// mettre le tableau users a vide pour effacer la liste 
  const handleClear = () => {
    setUser([]);
        console.warn('tous les users supprimes');
  };

  return (
    <View>
    {/* .map pr boucler sur le tableau des users et les afficher tous sur la page*/}
      {users.map(user => (
        <View>
          <Text>
            Le nom de l'utilisateur est : {user.nom} et le prenom de l'utilisateur est: {user.prenom}
          </Text>
        </View>
      ))}
      {/* boutons pour ajouter et effacer utilisers  */}
      <Button title="Ajouter" onPress={handleAddUser} />
      <Button title="Effacer users" onPress={handleClear} />
    </View>
  );
};
export default ListUser;
