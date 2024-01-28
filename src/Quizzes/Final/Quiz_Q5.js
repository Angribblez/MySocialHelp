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
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.4}]}>
                <Text style={styles.buttonText}>Racoon Ralph excitedly arrives at the job interview. He's nervous and gets asked difficult questions that interrogate his qualifications. How should he respond? 1) Maintain a positive and professional manner  to explain why he should be hired or 2) Start panicking and  talk about his  weaknesses.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q5_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Maintain a positive and professional manner  to explain why he should be hired</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q5_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Start panicking and talk about his weaknesses</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;