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
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.6}]}>
                <Text style={[styles.buttonText, {fontSize: 19}]}>The party continues and Francis slowly begins to talk to more and more adults. He is having a good time and is grateful that he practiced socializing with adults beforehand. Later on, he realizes that he is slowly getting tired and wants to go rest in his room, but he is having difficulty ending the conversation with the adults. How should Francis approach this situation? 1) Only say good night and walk away to his room or 2) Say that he had a good time amongst the guests and politely excuse himself as he says goodnight to everyone.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q18_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Only say good night and walk away into his room.</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q18_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Say that he had a good time amongst the guests and politely excuse himself as he says goodnight to everyone.</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;