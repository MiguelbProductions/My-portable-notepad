import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import App_Style from './CSS_Pages/App_Style';
import Header from './JS_Pages/Header';

export default function App() {
  const [state, setstate] = useState("reading");
  const [annotationcontent, setannotationcontent] = useState("");

  var textbutton = "";

  if (state == "reading") {
    textbutton = "Edit";

  } else if (state == "editing") {
    textbutton = "Save";
  }

  useEffect(() => {
    (async() => {
      try {
        const getannotation = await AsyncStorage.getItem("annotation");
        console.log(await AsyncStorage.getItem("annotation"));
        console.log("x");

        annotationcontent = getannotation;
      } catch (error){
        alert(error)

      }
    })
  }, [])

  setData = async(content) => {
    try {
      await AsyncStorage.setItem("annotation", content);

      alert(await AsyncStorage.getItem("annotation"))

    } catch (error){
      alert(error)
    }

  }

  
  if (state == "reading") {
    return(
       <View style={App_Style.Main}>
          <StatusBar hidden></StatusBar>

          <Header></Header>

          <ScrollView style={App_Style.TextBox}>
            {
              (annotationcontent == "")?
                <Text style={App_Style.TextNoContent} >Nothing to show here...</Text>
              :
                <Text style={App_Style.TextContent}>{annotationcontent}</Text>
            }
              
          </ScrollView>

          <TouchableOpacity onPress={() => { ChangeState(state, setstate) }} style={App_Style.ConfigButton}><Text style={App_Style.ConfigButtonText}>{textbutton}</Text></TouchableOpacity>
       </View>

    )  
  } else if (state == "editing") {
      return(
          <View style={App_Style.Main}>
            <StatusBar hidden></StatusBar>
            
            <Header></Header>

              <ScrollView style={App_Style.Text_Box}>
                  <TextInput autoFocus={true} style={App_Style.TextInput} onChangeText={(text) => setannotationcontent(text)}  multiline={true} numberOfLines={15} value={annotationcontent}></TextInput>
              </ScrollView>

              <TouchableOpacity onPress={() => { ChangeState(state, setstate, annotationcontent) }} style={App_Style.ConfigButton}><Text style={App_Style.ConfigButtonText}>{textbutton}</Text></TouchableOpacity>
          </View>
      )
  }

}

function ChangeState(state, setstate, annotationcontent) {
  if (state == "reading") { 
    setstate("editing");  
  } else if (state == "editing") { 
    setstate("reading");

    setData(annotationcontent);
  } 
}