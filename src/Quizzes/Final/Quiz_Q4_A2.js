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
            <View style={[styles.menuButton, {flex: 0.35, marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>Bad decision! Yelling about your anger won't get you anywhere good. As you read before, everyone is redeemable. Fortunately, you have the power to go back in time, select "retry" to alter your day. Good luck!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q1')} style={styles.menuButton}><Text style={styles.buttonText}>Retry</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;