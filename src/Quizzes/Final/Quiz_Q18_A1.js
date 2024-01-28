//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Quiz({navigation}) { 

    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>Final Quiz</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {flex: 0.4, marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>Bad Decision. When leaving a social  situation with adults it is always beneficial to end with a good farewell. Only saying good night and leaving can appear to be rude to guests and may seem as if you don't enjoy your interactions with them. Luckily, your decisions are reversible. Click "restart" to try again</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Intro')} style={styles.menuButton}><Text style={styles.buttonText}>Restart</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;