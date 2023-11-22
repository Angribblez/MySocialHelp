//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Quiz({navigation, route}) {
    const { score } = route.params;
    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>16-17 Quiz Q2</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You finally have a day off school and/or work and have been feeling stressed recently. What will you do?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q2_Correct', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Go to a local amusement park with friends</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q2_Correct', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>B. Relax at home and watch tv and/or a movie</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q2_Incorrect', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>C. Cover your co-workers' shift because they said they wanted to take the day off</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1617_Q2_Incorrect', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Tutor you friends who are struggling because they asked for help incessantly</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;