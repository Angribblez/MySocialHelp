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
                <Text style={styles.titleText}>14-15 Quiz Q1</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You have 5 assignments due in 6 hours, together they should take about 5 hours to complete. Which of these options should you choose in most cases?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>A. Go chat with friends and work on the assignments 10 minutes before its due.</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q1_Correct')} style={styles.menuButton}><Text style={styles.buttonText}>B. Work on the assignments now, and chat with friends afterwards</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>C. Start work on the assignments now, but take a 2 hour nap in between</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>D. Post and complain about it on TikTok hoping that you will be given the answers</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;