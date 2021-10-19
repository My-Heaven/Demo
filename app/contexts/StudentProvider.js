import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'

const StudentContext = createContext();
const StudentProvider = ({children}) => {
    const [students, setStudents] = useState([]);

    const findStudent = async ()=>{
        const result = await AsyncStorage.getItem('students');
        console.log(result);
        if(result != null) setStudents(JSON.parse(result));
    }
    useEffect(() => {
        findStudent();
    },[]);

    return (
        <StudentContext.Provider value={{students,setStudents,findStudent}}>
            {children}
        </StudentContext.Provider>
    )
}

export const useStudents = () => useContext(StudentContext)

export default StudentProvider
