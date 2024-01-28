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
                <Text style={styles.buttonText}>Unfortunately, Skunk's day doesn't seem to be getting any better. He had a fun 1st period, but now here comes Brad the Bully Bear. He makes fun of Skunk's shaggy new haircut that Skunk thought looked very stylish. Do you 1) Ask Bear to "Please stop" or 2) Retaliate by making fun of Bear's shoes.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q2_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Ask Bear to "Please stop!"</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q2_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Retaliate by making fun of Bear's shoes</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;