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
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.4}]}>
                <Text style={styles.buttonText}>Unfortunately, Perplexed Piglet's groupmates come back the next day and continue not to pull their weight. Do you 1) Lash out at them for not doing their part or 2) Tell the teacher about how you are the only one doing work in the group. </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q8_A1')} style={styles.menuButton}><Text style={styles.buttonText}>You decide to tell the teacher about your groupmates' behavior</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q8_A2')} style={styles.menuButton}><Text style={styles.buttonText}>You decide to verbally lash out at them for not working</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;