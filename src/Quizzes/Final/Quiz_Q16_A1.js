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
            <View style={[styles.menuButton, {flex: 0.45, marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>You should always do what you feel is right. It is important to practice in order to improve a certain skill. If Francis only goes the remainder of days, he could potentially lose the progress he has made. To ensure that he doesn't lose his progress, Francis decides that it would be best to be honest with his friend about how he feels and spends most of his time with his family. </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q17')} style={styles.menuButton}><Text style={styles.buttonText}>Continue</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;