import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, Text, Modal, StyleSheet, TextInput, Button, Keyboard } from 'react-native'

const StudentInputModal = ({visible, onClose, onSubmit, student, isEdit}) => {
    const [name, setName] = useState('');
    const [classs, setClass] = useState('');
    const handleModalClose = () =>{
        Keyboard.dismiss();
    };

    useEffect(() =>{
        if(isEdit){
            setName(student.name)
            setClass(student.classs)
        }
    },[isEdit])

    const handleOnChangeText = (text, valueFor) => {
        if(valueFor === 'name') setName(text);
        if(valueFor === 'classs') setClass(text);
    }
    console.log(name, classs);

    const handleSubmit = () =>{
        if(!name.trim() && !classs.trim()) return onClose();
        if(isEdit){
            onSubmit(name, classs)
        }else{
            onSubmit(name, classs);
            setName('');
            setClass(''); 
        }
        onClose();
    }
    const closeModal = () => {
        if (!isEdit) {
          setName('');
          setClass('');
        }
        onClose();
      };
    return (
        <>
        <StatusBar hidden/>
        <Modal visible={visible} animationType='fade'>
            <View style={styles.container}>
                <Text style={styles.header}>Create Student</Text>
                <TextInput value={name} placeholder='Name' style={styles.input} onChangeText ={(text) => handleOnChangeText(text, 'name')}/>
                <TextInput value={classs} placeholder='Class' style={styles.input} onChangeText ={(text) => handleOnChangeText(text, 'classs')}/>
               
                <View style={styles.saveButton}>
                <Button title='Save' onPress={handleSubmit}/>
                <Button title='Close' onPress={closeModal}/>
                </View>
            </View>
            
        </Modal>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        textAlign: 'center',

    },
    input:{
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        fontSize: 25,
        paddingTop: 10,
    },
    saveButton:{
        display: 'flex',
        marginTop: 10,
        justifyContent: 'center',
    },

})
export default StudentInputModal
