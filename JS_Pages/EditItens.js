import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, Image, Alert, ToastAndroid, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EditItens from '../CSS_Pages/EditItens_Style';

export default function App(props) {
  const [title, setTitle] = useState(props.annotations[props.selectedannotation - 1].title);
  const [content, setContent] = useState(props.annotations[props.selectedannotation - 1].content);

  return(
      <ScrollView style={EditItens.Main}>
        <View style={EditItens.Title_Box}>
          <View style={EditItens.RowContainer}>
            <TouchableOpacity onPress={() => {
                if (title == "" || content == "") {
                  props.setannotations((prevState) => {

                    const updatedAnnotations = [...prevState];
                    updatedAnnotations.pop()
                    return updatedAnnotations;
                  });
                }

                props.setselectedannotation("")
              }}>
                <Image
                    style={EditItens.LeftIcon}
                    source={require("../Assets/Images/Icons/Return.png")}
                />
            </TouchableOpacity>
            <TextInput
                autoFocus={true}
                style={EditItens.Title}
                value={title}
                onChangeText={(text) => setTitle(text)}
                placeholder='Your title...'
            />
            <TouchableOpacity 
                style={EditItens.SaveBox} 

                onPress={() => { 
                  if (title != "" && content != "") {
                    props.setannotations((prevState) => {
                      const updatedAnnotations = [...prevState];
                      updatedAnnotations[props.selectedannotation - 1] = {...updatedAnnotations[props.selectedannotation - 1],
                        title: title,
                        content: content,
                      };

                      ToastAndroid.show('Annotation Saved', ToastAndroid.SHORT);
                      
                      return updatedAnnotations;
                    });
                  } else if (title == "" && content == ""){
                    Alert.alert(
                      "Insert a title and annotation.",
                      "You need to enter a title and annotation for it to be saved.",
                      [
                        { text: "OK" }
                      ]
                    );
                  } else if (title == ""){
                    Alert.alert(
                      "Insert a title.",
                      "You need to enter a title for it to be saved.",
                      [
                        { text: "OK" }
                      ]
                    );
                  } else if (content == ""){
                    Alert.alert(
                      "Insert an annotation.",
                      "You need to enter an annotation for it to be saved.",
                      [
                        { text: "OK" }
                      ]
                    );
                  }                }}>
                    
                <Image
                    style={EditItens.SaveIcon}
                    source={require("../Assets/Images/Icons/Save.png")}
                />
            </TouchableOpacity>
          </View>
        </View>
        <View style={EditItens.AnnotationArea}>
          <StatusBar hidden></StatusBar>
            <ScrollView style={EditItens.Text_Box}>
                  <TextInput 
                    style={EditItens.TextInput} 
                    onChangeText={(text) => {setContent(text)}} 
                    multiline={true} 
                    numberOfLines={15} 
                    value={content}
                    placeholder="Your annotation here..."
                  ></TextInput>
            </ScrollView>
        </View>
      </ScrollView>
  )
}






/*
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
  */