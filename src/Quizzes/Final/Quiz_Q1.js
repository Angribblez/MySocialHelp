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
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>Unfortunately, Skunk is already having a bad day. His  friend from middle school seems to have changed over the summer, and now doesn't want to hang out with Skunk. Do you 1) Brush it off or 2) Stay sad</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q1_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Brush it off</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q1_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Stay sad</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;