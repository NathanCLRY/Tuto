import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import firestore from '@react-native-firebase/firestore';

const initTask = [
    {
        id: "a",
        tache: "Faire la vaisselle",
        state: false,
    },
    {
        id: "b",
        tache: "Faire la vaisselle",
        state: false,
    },
    {
        id: "c",
        tache: "Faire la vaisselle",
        state: false,
    },
    {
        id: "d",
        tache: "Faire la vaisselle",
        state: false,
    },
    {
        id: "e",
        tache: "Faire la vaisselle",
        state: false,
    },
]
const List = () => {
    const [tasks, setTasks] = useState(initTask)
    //Au chargement du composant on charlge les données en base
    useEffect(() => {
        firestore()
        .collection('tasks')
        .get()
        .then(rqsnap => {
            rqsnap.forEach(document => {
                console.log(document)
                const doc = {
                    id: document.id,
                    ...document.data
                }
                console.log(doc)
                const newTask = [
                    ...tasks, doc
                ];
                console.log(newTask);
                setTasks(newTask);
            })
        })
    }, [])
    
  return (
        <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ItemList task={item}/>}
        />
  )
}

export default List