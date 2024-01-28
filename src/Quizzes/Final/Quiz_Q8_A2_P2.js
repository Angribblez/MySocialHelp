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
                <Text style={styles.buttonText}>Unfortunately, your teacher reprimands you for this behavior and you are expelled from the school. Click "restart" to try again. Everyone is redeemable!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q7_P2')} style={styles.menuButton}><Text style={styles.buttonText}>Retry section</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;