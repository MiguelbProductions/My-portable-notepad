import { StyleSheet, Text, View, Image } from 'react-native';

import Header_Style from '../CSS_Pages/Header_Style';

export default function Header() {
    return (
        <View style={Header_Style.Title_Box}>
            <Text style={Header_Style.Title}>
                My portable Notepad
            </Text>
        </View>
    )
}