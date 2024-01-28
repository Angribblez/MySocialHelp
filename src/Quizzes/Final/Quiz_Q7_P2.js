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
                <Text style={styles.buttonText}>Perplexed Piglet starts a new school and has to be in a group for a project. Not knowing anyone, he buddies up with the people sitting next to him. During class, his groupmates do nothing but sit on their phones. Do you 1) Kindly ask them to work on the project and help you out with the work or 2) Carry the team and complete the whole project on your own, the way you want it.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q7_A1')} style={styles.menuButton}><Text style={styles.buttonText}>You decide to carry the team and complete the project.</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q7_A2')} style={styles.menuButton}><Text style={styles.buttonText}>You decide to try to talk to your groupmates</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;