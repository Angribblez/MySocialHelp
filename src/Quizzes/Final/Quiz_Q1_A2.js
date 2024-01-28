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
            <View style={[styles.menuButton, {flex: 0.3, marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>That is completely understandable, when friends just don't work together anymore, it is always painful. Remember, though, that people change and not to let this interaction spoil your day!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q2')} style={styles.menuButton}><Text style={styles.buttonText}>Continue</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;