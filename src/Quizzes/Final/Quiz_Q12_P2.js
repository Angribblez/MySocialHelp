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
                <Text style={[styles.buttonText, {fontSize: 19}]}>Towards the end of senior year in highschool,  Francis Frog is chosen as valedictorian. During graduation, Francis will have to give a speech in front of the graduating class and their families/friends. He is very stressed about speaking publicly in front of a large audience and fears that he will not know what to say. Should Francis 1) Write a speech a couple of weeks ahead of time and begin practicing so he is prepared for graduation day. or 2) Wait until a couple days before graduation and begin writing the speech.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q12_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Write a speech a couple of weeks ahead of time and begin practicing so he is prepared for graduation day.</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q12_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Wait until a couple days before graduation and begin writing the speech. </Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;