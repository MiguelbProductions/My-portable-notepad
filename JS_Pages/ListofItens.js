import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';

import ListofItens_Style from '../CSS_Pages/ListofItens_Style';

export default function ListofAnnotations(props) {

    const[searching, setsearching] = useState(false);
    const[textfilter, settextfilter] = useState("");

    const[choosingitem, setchoosingitem] = useState(false);

    return (
        <View style={ListofItens_Style.Main}>
            <View style={ListofItens_Style.Title_Box}>
                {
                    (!searching)?
                        <Text style={ListofItens_Style.Title}>My portable Notepad</Text>
                    :
                        <TextInput onChangeText={(text) => {settextfilter(text)}} autoFocus={true} style={ListofItens_Style.Title} value={textfilter}></TextInput>
                }

                <TouchableOpacity style={ListofItens_Style.SearchBox} onPress={ () => {setsearching(!searching); }}>
                    <Image
                        source={require("../Assets/Images/Icons/Search.png")}
                        style={ListofItens_Style.SearchButton}
                    ></Image>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {
                    props.annotations.map((annotation, index) => (
                        (textfilter == "")?
                            <TouchableOpacity style={ListofItens_Style.Itens_Box} key={index} onPress={() => {props.setselectedannotation(index + 1)}}>
                                <Text style={ListofItens_Style.Itens_Title} key={index}>{annotation.title}</Text>
                            </TouchableOpacity>
                        :
                            annotation.title.includes(textfilter) && (
                                <TouchableOpacity style={ListofItens_Style.Itens_Box} key={index} onPress={() => {props.setselectedannotation(index + 1)}}>
                                    <Text style={ListofItens_Style.Itens_Title} key={index}>{annotation.title}</Text>
                                </TouchableOpacity>
                            )
                    ))
                }
            </ScrollView>

            {
                choosingitem && (
                    <TouchableOpacity
                        onPress={() => {
                            AddNewAnnotation(props.annotations, props.setselectedannotation);
                        }}
                        style={ListofItens_Style.AnnotationOptionButton}
                        >
                        <Image
                            source={require("../Assets/Images/Icons/Annotation.png")}
                            style={ListofItens_Style.OptionImage}
                        ></Image>
                    </TouchableOpacity>
                )               
            }

            {
                choosingitem && (
                    <TouchableOpacity
                        onPress={() => {
                        }}
                        style={ListofItens_Style.TaskOptionButton}
                        >
                        <Image
                            source={require("../Assets/Images/Icons/Task.png")}
                            style={ListofItens_Style.OptionImage}
                        ></Image>
                    </TouchableOpacity>
                )
            }

            <TouchableOpacity
              onPress={() => {
                setchoosingitem(!choosingitem);

              }}
              style={ListofItens_Style.AddNewItemButton}
            >
              <Text style={ListofItens_Style.AddNewItemText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

function AddNewAnnotation(annotations, setselectedannotation) {
    
    annotations.push(
      { 
        title: "",  
        annotation: ""
      }
    )


    setselectedannotation(annotations.length)
}