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
                <Text style={styles.titleText}>15-16 Quiz Q1</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You have started a new job at an office and one of your co-workers specifically talks to you in an inconsiderate manner. How do you deal with this situation?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q1_Correct')} style={styles.menuButton}><Text style={styles.buttonText}>A. Confront the co-worker assertively by saying you don't favor their language</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>B. Gossip & start rumors about the co-worker at the office</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>C. Confront the co-worker in an aggressive manner about their language</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>D. Do nothing</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;