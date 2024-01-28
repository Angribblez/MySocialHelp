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
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.6}]}>
                <Text style={[styles.buttonText, {fontSize: 16}]}>The day after graduation, Francis finds out that his parents have planned him a "Going Away to College Party'  that will be held 2 weeks later. He realizes that this will be an event where many adults will be present. He is nervous since he has a bad track record of interacting with adults. His parents tell him that adult interactions are a key part of the real world as he grows up. Francis realizes that his parents are right and decides to use the 14 days he has before the party to improve this skill. However, he is not sure where to begin. Should Francis 1) Begin by having more conversations with adults in his household or 2) Begin by creating an account on a social platform and talk to adults around the world.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q15_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Begin by having more conversations with adults in his household.</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q15_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Begin by creating an account on a social platform and talk to adults around the world.</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;