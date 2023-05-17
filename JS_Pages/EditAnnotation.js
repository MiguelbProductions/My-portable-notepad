import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, Image, Alert, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import App_Style from '../CSS_Pages/EditAnnotation_Style';

export default function App(props) {
  const [title, setTitle] = useState(props.annotations[props.selectedannotation].title);
  const [content, setContent] = useState(props.annotations[props.selectedannotation].content);

  return(
      <View>
        <View style={App_Style.Title_Box}>
          <View style={App_Style.RowContainer}>
            <TouchableOpacity onPress={() => {props.setselectedannotation("")}}>
                <Image
                    style={App_Style.LeftIcon}
                    source={require("../Assets/Images/Icons/Return.png")}
                />
            </TouchableOpacity>
            <TextInput
                autoFocus={true}
                style={App_Style.Title}
                value={title}
                onChangeText={(text) => setTitle(text)}
                placeholder='Your title...'
            />
            <TouchableOpacity 
                style={App_Style.SaveBox} 

                onPress={() => { 
                  if (title != "" && content != "") {
                    props.setannotations((prevState) => {
                      const updatedAnnotations = [...prevState];
                        updatedAnnotations[props.selectedannotation] = {
                        ...updatedAnnotations[props.selectedannotation],
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
                    style={App_Style.SaveIcon}
                    source={require("../Assets/Images/Icons/Save.png")}
                />
            </TouchableOpacity>
          </View>
        </View>
        <View style={App_Style.Main}>
          <StatusBar hidden></StatusBar>
          
            <ScrollView style={App_Style.Text_Box}>
                <TextInput 
                  style={App_Style.TextInput} 
                  onChangeText={(text) => {setContent(text)}} 
                  multiline={true} 
                  numberOfLines={15} 
                  value={content}
                  placeholder="Your annotation here..."
                ></TextInput>
            </ScrollView>
        </View>
      </View>
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