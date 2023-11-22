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
                <Text style={styles.titleText}>17-18 Quiz Q2</Text>
            </TouchableOpacity>
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 30, flex: 0.3}]}>
                <Text style={styles.buttonText}>You were invited to a large event with a lot of important people you are hoping </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q2_Incorrect', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>A. Decline the invite as the thought of impressing important people scares you</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q2_Correct', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>B. Decline the invite as the thought of impressing important people scares you</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q2_Incorrect', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>C. Accept the invite with no consideration of the important people</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q2_Incorrect', {score:score})} style={styles.menuButton}><Text style={styles.buttonText}>D. Decline the invite as you think the 'important people' are nothing more than you</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;