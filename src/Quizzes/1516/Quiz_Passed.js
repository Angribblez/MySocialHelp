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
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.titleBar, {flex: 0.3}]}>
                <Text style={styles.titleText}>Congratulations, you pass year 15-16 quiz! Your score is {score} / 30</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.menuButton}><Text style={styles.buttonText}>Home</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;