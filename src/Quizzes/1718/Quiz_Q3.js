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
                <Text style={styles.titleText}>17-18 Quiz Q3</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You have a paycheck of $1,000 for a month to live on. How do you spend the money?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q3_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Rent- $500, groceries- $300, extra spending- $100</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q3_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>B. Rent- $500, unhealthy groceries-$200, savings- $0, extra spending- $200</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q3_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>C. Rent- $200 and ask a friend to pay the rest, groceries- $300, savings- $0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q3_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>D. $1,000 for extra spending money and ask family to pay for necessities</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;