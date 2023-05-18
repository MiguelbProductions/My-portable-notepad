import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EditItens from './JS_Pages/EditItens';
import ListofItens from './JS_Pages/ListofItens';

export default function App() {
  const[selectedannotation, setselectedannotation] = useState("");

  const[annotations, setannotations] = useState([
  ]);  

  return(
      <View style={{width: "100%"}}>
        <StatusBar hidden></StatusBar>
        {
          (selectedannotation == "")?
            <ListofItens selectedannotation={selectedannotation} setselectedannotation={setselectedannotation} annotations={annotations} setannotations={setannotations}></ListofItens>
          :
            <EditItens selectedannotation={selectedannotation} setselectedannotation={setselectedannotation} annotations={annotations} setannotations={setannotations}></EditItens>
          
        } 
       
       
      </View>
  )
}