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
                <Text style={styles.titleText}>14-15 Quiz Q2</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>Correct!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1415_Q3', {score: 5+score})} style={styles.menuButton}><Text style={styles.buttonText}>Continue</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;