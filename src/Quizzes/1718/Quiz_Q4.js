//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Quiz({navigation, route}) {
    const { score } = route.params;
    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>17-18 Quiz Q4</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You hit a car in traffic whilst driving and you are in the wrong. What do you do?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q4_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Drive away really fast to avoid confrontation</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q4_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>B. Strongly express your concerns to the person in the other car, putting blame on</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q4_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>C. Deny accountability peacefully</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q4_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Admit your fault, and arrange to make it right</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;