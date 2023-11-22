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
                <Text style={styles.titleText}>14-15 Quiz Q4</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>Your classmate comes up to you and says “HEY! I NEED YOUR HOMEWORK NOW!”. What do you do?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q4_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Use violence in order fight them off</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q4_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>B. Say "No, I don't feel comfortable with that" and walk away</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q4_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>C. Say "Ummm, sure, here take it" and hand them your homework</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q4_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Escalate the situation and steal their homework</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;