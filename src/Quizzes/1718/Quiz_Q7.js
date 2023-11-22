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
                <Text style={styles.titleText}>17-18 Quiz Q7</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You are visiting a college along with other prospective students and they invite you to a group dinner afterwards. What do you do?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q7_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Walk away without saying anything</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q7_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>B. “Sorry I wish I could but I have to go to dinner with my family”</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q7_Correct', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>C. “Yeah for sure, that sounds fun!”</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q7_Incorrect', {score: score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Be rude to them</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;