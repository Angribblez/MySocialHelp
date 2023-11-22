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
                <Text style={styles.titleText}>17-18 Quiz Q7</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>Incorrect! The correct answers are “Sorry I wish I could but I have to go to dinner with my family” and “Yeah for sure, that sounds fun!”</Text>
            </View>
            <TouchableOpacity onPress={() => {if (score >= 35){navigation.navigate('Quiz_1718_Passed', {score: score})}else{navigation.navigate('Quiz_1718_Failed', {score: score})}}} style={styles.menuButton}><Text style={styles.buttonText}>Continue</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;