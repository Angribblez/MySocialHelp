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
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.5}]}>
                <Text style={styles.buttonText}>Although Perplexed Piglet had a rough start to this new school, he manages to make a friend, Donald Dolphin, during lunch. However, he gets a little too close and Donald  Dolphin starts asking personal questions that make Piglet uncomfortable. Do you 1) Answer the questions and play along or 2) Politely ask them to stop, setting a boundary</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q9_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Answer the questions and play along</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q9_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Politely ask them to stop and set a boundary</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;