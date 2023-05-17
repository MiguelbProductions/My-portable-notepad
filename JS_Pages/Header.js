import { Text, View } from 'react-native';
import { useState } from 'react';

import Header_Style from '../CSS_Pages/Header_Style';

export default function Header(props) {

    return (
        <View style={Header_Style.Title_Box}>
            <Text style={Header_Style.Title}>My portable Notepad</Text>

            
        </View>
    );
}

