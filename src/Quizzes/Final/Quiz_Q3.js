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
            <View style={[styles.menuButton, {flex: 0.5, marginTop: 20, marginBottom: 30}]}>
                <Text style={styles.buttonText}>Great! It's a teacher. Teachers are there to help you and keep you safe at school. This teacher knows that Brad the Bully Bear has bullied many other students, and drags him right into the office. The bully is expelled, but realizes his wrongdoings and finds a school that is the right fit for him. Now that you can relax, you begin to love school again, and start excelling in your classes.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q3_P2')} style={styles.menuButton}><Text style={styles.buttonText}>Continue</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;