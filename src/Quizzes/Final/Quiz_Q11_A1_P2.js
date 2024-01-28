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
            <View style={[styles.menuButton, {flex: 0.3, marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>You go home and tell your parents about the offer and how you responded. Unfortunately, they found this disrespectful behavior and decide to ground you for life. Click "restart" to try again. </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q11')} style={styles.menuButton}><Text style={styles.buttonText}>Retry scenario</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;