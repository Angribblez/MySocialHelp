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
                <Text style={styles.titleText}>17-18 Quiz Q1</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>Your roommate keeps their side of your room messy, causing it to smell and bother you, how would you ask them to keep their side clean?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>A. “Bro your side stinks, you need to clean up.”</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q1_Incorrect')} style={styles.menuButton}><Text style={styles.buttonText}>B. Say nothing and clean it for them</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q1_Correct')} style={styles.menuButton}><Text style={styles.buttonText}>C. “Hey I noticed your side of the room is getting a little messy, could you clean"</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q1_Correct')} style={styles.menuButton}><Text style={styles.buttonText}>D. “Hey, can you clean your space? It bothers me.”</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;