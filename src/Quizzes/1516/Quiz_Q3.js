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
                <Text style={styles.titleText}>15-16 Quiz Q3</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>Your classmate comes up to you and says “HEY! I NEED YOUR HOMEWORK NOW!”. What do you do?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q3_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>A. “Sorry teacher, I got caught up in traffic”</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q3_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>B. “Why does it matter to you?”</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q3_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>C. “I'm so sorry, it won't happen again”</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q3_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Ignore your teacher in the hope of avoiding a confrontation</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;