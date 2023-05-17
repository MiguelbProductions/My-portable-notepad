import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import App_Style from './CSS_Pages/App_Style';
import Header from './JS_Pages/Header';
import EditAnnotation from './JS_Pages/EditAnnotation';

export default function App() {
  const[selectedannotation, setselectedannotation] = useState("");

  const[annotations, setannotations] = useState([
    {
      title: "Test 1",
      content: "This is a Test Text 1",
    },
    {
      title: "Test 2",
      content: "This is a Test Text 2",
    },
    {
      title: "Test 3",
      content: "This is a Test Text 3",
    },
    {
      title: "Test 4",
      content: "This is a Test Text 4",
    },
  ]);

  return(
      <View>
        <ScrollView style={App_Style.Main}>
          <StatusBar hidden></StatusBar>
          {
            selectedannotation == "" && (
              <Header></Header>
            )
          } 
          {
            (selectedannotation == "")?
              annotations.map((annotation, index) => (
                <TouchableOpacity style={App_Style.Annotation_Box} key={index} onPress={() => {setselectedannotation(index)}}>
                  <Text style={App_Style.Annotation_Title} key={index}>{annotation.title}</Text>
                </TouchableOpacity>
              ))
            :
              <EditAnnotation selectedannotation={selectedannotation} setselectedannotation={setselectedannotation} annotations={annotations} setannotations={setannotations}></EditAnnotation>
            
          } 
        
        </ScrollView>

        {
          selectedannotation == "" && (
            <TouchableOpacity
              onPress={() => {
                AddNewAnnotation(annotations, setannotations, setselectedannotation);
              }}
              style={App_Style.AddAnnotationButton}
            >
              <Text style={App_Style.AddAnnotationButtonText}>+</Text>
            </TouchableOpacity>
          )
        }
      </View>
  )
}

function AddNewAnnotation(annotations, setannotations, setselectedannotation) {
    annotations.push(
      { 
        title: "",  
        annotation: ""
      }
    )

    setselectedannotation(annotations.length - 1)
}