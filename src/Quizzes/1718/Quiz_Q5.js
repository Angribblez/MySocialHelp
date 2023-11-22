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
                <Text style={styles.titleText}>17-18 Quiz Q5</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You are at a college party with your friends and someone offers you an undefined pill. How do you respond?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q5_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Use humor to deflect pressure or attention</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q5_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>B. Politely decline</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q5_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>C. Leave the party in an aggressive manner</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q5_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Accept the pills and pretend to take them.</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;