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
                <Text style={styles.titleText}>17-18 Quiz Q6</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You see your teacher at the supermarket  and are shocked, you see them approaching you. What do you do?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q6_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Leave the store</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q6_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>B. Say "Hi", wave, and leave</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q6_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>C. Ignore them and pretend you didn't see them</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q6_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Say "Hi, how are you?"</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;