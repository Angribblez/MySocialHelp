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
                <Text style={styles.buttonText}>Francis had made final edits to his speech and knows what he will say on graduation day. Although he has a speech prepared, he is still nervous about showing inconsistency while he speaks. In order to overcome the social anxiety of public speaking will he 1) Practice in front of friends and family, while gradually increasing his audience size or 2) Practice by only reading it to himself.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q13_A1')} style={styles.menuButton}><Text style={styles.buttonText}>Practice in front of friends and family, while gradually increasing his audience size</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q13_A2')} style={styles.menuButton}><Text style={styles.buttonText}>Practice by only reading it to himself</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;