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
                <Text style={styles.titleText}>14-15 Quiz Q2</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>A co-worker comes up to you and says “Hi, how are you?”. Which of these options should you do?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q2_Correct', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Reply "Good, how are you?"</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q2_Incorrect', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>B. Reply in an arrogant way “What do you want?”</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q2_Correct', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>C. Reply "Good."</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q2_Incorrect', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Carefully pretend to not hear them.</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;