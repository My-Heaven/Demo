import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, FlatList, } from 'react-native'
import { useStudents } from './contexts/StudentProvider';
import Student from './Student';
import StudentInputModal from './StudentInputModal';
//add navigation
const Main = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    
    const {students, setStudents} = useStudents();

    

    const handleOnSubmit = async (name, classs) =>{
        const student = {id: Date.now(), name, classs}
        const updateStudents = [...students, student];
        setStudents(updateStudents);
        await AsyncStorage.setItem('students', JSON.stringify(updateStudents) );
    };

    const openStudent = student => {
        navigation.navigate('StudentDetail', {student})
    }

    
    return (
        <>
        <StatusBar hidden/>
        <View style={StyleSheet.container}>
            <Text style={styles.header}>Demo CRUD</Text>
            <Button title="Create Student" onPress={() => setModalVisible(true)} />
            <FlatList 
                data={students}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <Student onPress={() => openStudent(item)} item={item}/>
                )}
            />
        </View>
        <StudentInputModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        onSubmit = {handleOnSubmit}
        />
        </>
    );
}
const styles = StyleSheet.create({
    container:{

    },
    header:{
        textAlign: 'center',
    }
})

export default Main

