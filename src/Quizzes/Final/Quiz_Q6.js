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
                <Text style={styles.buttonText}>The interviewer takes a pause and lets you take a small break Do you 1) Step out for a moment to calm yourself in the restroom or 2) Apologize and leave</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q5_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Go the bathroom and try to calm down and compose yourself</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q6_A1')} style={styles.menuButton}><Text style={styles.buttonText}>You decide to apologize to the interviewer and leave.</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;