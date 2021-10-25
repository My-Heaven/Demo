import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Student = ({item, onPress}) => {
    const {name, classs} = item;
    return (
        <TouchableOpacity onPress={onPress}>
             <Text style={{fontSize: 40}}>Name: {name}</Text>  
             <Text style={{fontSize: 40}}>Class: {classs}</Text>
        </TouchableOpacity>
    )
}

export default Student
