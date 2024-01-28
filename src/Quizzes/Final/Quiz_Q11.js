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
                <Text style={styles.buttonText}>After school, on their way Perplexed Piglet is walking home. They have been practicing their adult interaction skills. As they are walking home they are confronted by their next-door neighbor. Their neighbor requests "Would it be possible for your and your family to  attend dinner with us later this afternoon?". What should Perplexed Piglet do?  1) Ignore their neighbors request and run inside their home. 2) Say thanks for the invitation and tell them you will ask your parents</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q11_A1')} style={styles.menuButton}><Text style={styles.buttonText}>You decide to ignore the request and run home</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q11_A2')} style={styles.menuButton}><Text style={styles.buttonText}>You decide to acknowledge the request and go home to ask your parents</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;