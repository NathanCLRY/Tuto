import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const Form = () => {
    const [tache, setTache] = useState("")
    const enregistrer = () => {
        console.log("enregistrer", tache);
        setTache('');
    }
    
return (
    <TextInput
        label={"Saisir une tâches"}
        value={tache}
        onChangeText={text =>setTache(text)}
        onSubmitEditing={enregistrer}
    />
)
}

export default Form