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
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.5}]}>
                <Text style={styles.buttonText}>Alright, here comes the teacher. But oh no! They heard what you said and think that you were bullying Bear! In an effort to protect other students, you have been expelled. Always remember that everyone is redeemable. Do you 1) Explain yourself calmly and respectfully to your parents or 2) Yell in the school office about how this makes you angry</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q4_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Calmly explain yourself</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q4_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Yell in the school office about how angry you are</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;