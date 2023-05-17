import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
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
                    props.setannotations((prevState) => {
                        return prevState.map((annotation) => {
                        if (annotation.title === props.annotations[props.selectedannotation].title) {
                            return { ...annotation, 
                              title: title,
                              content: content
                            };
                        }
                        return annotation;
                        });
                    });
                }}>
                    
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
                <TextInput style={App_Style.TextInput} onChangeText={(text) => {setContent(text)}} multiline={true} numberOfLines={15} value={content}></TextInput>
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