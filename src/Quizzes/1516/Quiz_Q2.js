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
                <Text style={styles.titleText}>15-16 Quiz Q2</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>Your coworker is asking for a loan from you for unspecified reasons. What do you do?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q2_Correct', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Apologize for their situation, explain you cant help & give helping suggestions </Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q2_Incorrect', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>B. Tell them “I think that is your own fault” and then walk away</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q2_Incorrect', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>C. Ignore them and let them deal with their issues on their own</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q2_Incorrect', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Tell them “Sure I can help you” even though you are in debt as well</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;