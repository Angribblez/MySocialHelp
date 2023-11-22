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
                <Text style={styles.titleText}>16-17 Quiz Q1</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You are getting ready for a job interview and you need leave in 30 minutes in order to be on time. What should you do beforehand?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>A. Go back to sleep and set a timer for 25 minutes</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q1_Correct')} style={styles.menuButton}><Text style={styles.buttonText}>B. Shower, practice self care, and dress in formal clothes</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>C. Go on a run immediately after get dressed then leave for the interview</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>D. Go hang out with friends without keeping track of time</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;