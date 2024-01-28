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
            <View style={[styles.menuButton, {flex: 0.45, marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>Reading straight from your paper and disregarding the audience shows unprofessionalism. It is crucial to have warm body language to ensure that the audience is engaged in the speech. Additionally, only reading from the paper can often cause more anxiety and fear of facing the audience. </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q15')} style={styles.menuButton}><Text style={styles.buttonText}>Continue</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;