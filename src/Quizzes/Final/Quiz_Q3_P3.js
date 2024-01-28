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
                <Text style={styles.buttonText}>Raccon Ralph receives news for a new job opportunity for sophomores in High School. He is very excited to hear of this and decides to apply. Eventually, he gets a phone call to go in for a job interview!  However, Raccon Ralph is facing a dilema between outfit options for the interview. Will he 1) Wear a hoodie with sweatpants? or 2) Wear a formal shirt with jeans.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q3_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Hoodie with Sweatpants</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q3_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Formal  shirt with jeans</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;