//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity } from 'react-native';

//import style
var styles = require('../Styles.js');

//home screen
function QuizzesScreen({navigation}) {
    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>Quizzes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q1')} style={styles.menuButton}><Text style={styles.buttonText}>Quiz 14-15</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q1')} style={styles.menuButton}><Text style={styles.buttonText}>Quiz 15-16</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q1')} style={styles.menuButton}><Text style={styles.buttonText}>Quiz 16-17</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q1')} style={styles.menuButton}><Text style={styles.buttonText}>Quiz 17-18</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q1')} style={styles.menuButton}><Text style={styles.buttonText}>Final Quiz</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = QuizzesScreen;