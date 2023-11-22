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
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>Incorrect! The correct answer was 'Shower, practice self care, and dress in formal clothes'</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q2', {score: 0})} style={styles.menuButton}><Text style={styles.buttonText}>Continue</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;