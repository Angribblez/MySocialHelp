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
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.55}]}>
                <Text style={[styles.buttonText, {fontSize: 18}]}>The day of the party finally arrives. Francis is nervous to meet all the guests, but he is excited as well. As the guests start arriving, Francis realizes that he hasn't met some of the adults. They are only a couple of years older than him, but he feels slightly intimitated. His parents tell him to go introduce himself to the new guests, but he is unsure of how to approach them. Should he 1) Introduce himself in a friendly manner with a smile and positive body language or 2) Introduce himself in a quiet tone and let them enjoy the party by themselves.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q17_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Introduce himself in a quiet tone and let them enjoy the party by themselves.</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q17_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Introduce himself in a friendly manner with a smile and positive body language.</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;