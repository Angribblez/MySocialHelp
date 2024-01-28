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
                <Text style={styles.titleText}>Final Quiz</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.6}]}>
                <Text style={styles.buttonText}>Towards the end of the day, Piglet is walking from their final class to their locker. Piglet can't wait to go home, however, while they are walking their first period teacher stops them in the hall. The teacher states "I need some help moving class supplies to my car." Piglet is grateful to be chosen to help, but this is their first time talking to this teacher outside of the classroom. How should Piglet respond? 1) Ignore the request and the teacher or 2) Accept the task and help out their superior</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q10_A1')} style={styles.menuButton}><Text style={styles.buttonText}>You decide to ignore the request and the teacher </Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q10_A2')} style={styles.menuButton}><Text style={styles.buttonText}>You decide to accept the task and help out the teacher</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;