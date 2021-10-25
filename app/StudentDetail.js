import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useStudents } from './contexts/StudentProvider';
import StudentInputModal from './StudentInputModal';

const StudentDetail = props => {
    const [student, setStudent] = useState(props.route.params.student)
    const {setStudents} = useStudents();

    const [showModal , setShowModal] = useState(false);
    const [isEdit , setEdit] = useState(false);
    

    const deleteStudent = async () => {
        const result = await AsyncStorage.getItem('students');
        let students = [];
        if(result !== null) students = JSON.parse(result); 
        const newStudents = students.filter(s => s.id !== student.id)
        setStudents(newStudents)
        await AsyncStorage.setItem('students', JSON.stringify(newStudents));
        props.navigation.goBack();
    }

    const handleUpdate = async (name, classs) => {
        const result = await AsyncStorage.getItem('students')
        let students = []
        if(result !== null) students = JSON.parse(result)

        const newStudents = students.filter(n => {
            if(n.id === student.id){
                n.name = name
                n.classs = classs

                setStudent(n)
            }
            return n
        })
        setStudents(newStudents)
        await AsyncStorage.setItem('students', JSON.stringify(newStudents))
    }
    const handleOnClose = () => setShowModal(false)

    const openEditModal = () =>{
        setEdit(true)
        setShowModal(true)
    }
    return (
        <>
        <View>
            <Text style={{fontSize: 40}}>Name: {student.name}</Text>
            <Text style={{fontSize: 40}}>Class: {student.classs}</Text>
            <View style={styles.buttonEdit}>
                <Button title='Edit' onPress = {openEditModal}/>
            </View>
            <Button title='Delete' onPress={deleteStudent}/>
        </View>
        <StudentInputModal isEdit={isEdit} student={student} onClose={handleOnClose} onSubmit={handleUpdate} visible={showModal} />
        </>
    
    );

};

const styles = StyleSheet.create({
    buttonEdit: {
        marginBottom: 10, 
        marginTop: 10,
    },
})
export default StudentDetail
