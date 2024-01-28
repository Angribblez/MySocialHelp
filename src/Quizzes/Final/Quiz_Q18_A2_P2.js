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
            <View style={[styles.menuButton, {flex: 0.35, marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>Congratulations! You have made it to the end. Now it is time to go out and apply what you have learned into the real world. Good luck, and remember, you got this!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.menuButton}><Text style={styles.buttonText}>Finish</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;