import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ListItem, Icon, Button } from '@rneui/themed';
import { styles } from '../style';

const ItemList = ({task}) => {
  //Fonction pour supprimer une tache
  const deleteTask = () => {
    console.log("sup", task.id);
  }
  const validateTask = () => {
    console.log("valid", task.id);
  }
  
  return (
    <ListItem.Swipeable
      leftContent={(reset) => (
        <Button 
          onPress={() => {validateTask(); reset()}}
          title='Valider'
          buttonStyle={styles.validateBtn}
        />
      )}
      rightContent={(reset) => (
        <Button 
          onPress={() => {deleteTask(); reset()}}
          title='Supprimer'
          buttonStyle={styles.deleteBtn}
        />
      )}
    >
        <ListItem.Content>
            <ListItem.Title>
                {task?.tache}
            </ListItem.Title>
        </ListItem.Content>
    </ListItem.Swipeable>
  )
}

export default ItemList