import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Student = ({item, onPress}) => {
    const {name, classs} = item;
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>Name: {name}</Text>
            <Text>Class: {classs}</Text>
        </TouchableOpacity>
    )
}

export default Student
