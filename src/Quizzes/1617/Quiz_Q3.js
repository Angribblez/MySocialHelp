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
                <Text style={styles.titleText}>16-17 Quiz Q3</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You are taking a walk and someone walks up to you and offers you unmarked pills. What do you do?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q3_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Say “Yeah. How much?”</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q3_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>B. Say "No, I don't feel comfortable with that" and walk away</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q3_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>C. Say “That's radical dude”</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q3_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Say “Nah, I'm good”</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;