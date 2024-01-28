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
                <Text style={styles.buttonText}>It is finally graduation day and Francis is excited for the big day. The superintendents of the education board happens to be present at the graduation. Francis  is about to go on stage and give his speech, however, he is nervous that he will not be able to communicate effectively to the audience. How does he execute his speech? 1)  Francis looks down and reads straight from the paper and does not acknowledge the audience. or 2) Francis effectively switches between reading from his paper and making eye contact with the audience, while using non-distracting hand gestures and a professional manner.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q14_A1')} style={styles.menuButton}><Text style={[styles.buttonText, {fontSize:18}]}>Francis looks down and reads straight from the paper and does not acknowledge the audience</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q14_A2')} style={[styles.menuButton, {flex: 0.2}]}><Text style={[styles.buttonText, {fontSize:18}]}>Francis effectively switches between reading from his paper and making eye contact with the audience, while using non-distracting hand gestures and a professional tone.</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;