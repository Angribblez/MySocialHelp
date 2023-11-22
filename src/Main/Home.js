//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity } from 'react-native';

//import style
var styles = require('../Styles.js');

//home screen
function HomeScreen({navigation}) {
    //variables
    count = 0;

    //return
    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => {if(count+1>=3){count=0;navigation.navigate('Sources')}else{count+=1}}} style={styles.titleBar}>
                <Text style={styles.titleText}>MySocialHelp</Text>
            </TouchableOpacity>
            <View style={styles.ageBar}>
                <View style={styles.ageRow}>
                <TouchableOpacity onPress={() => navigation.navigate('14-15')} style={styles.ageButton}><Text style={styles.buttonText}>14-15</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('15-16')} style={styles.ageButton}><Text style={styles.buttonText}>15-16</Text></TouchableOpacity>
                </View>
                <View style={styles.ageRow}>
                <TouchableOpacity onPress={() => navigation.navigate('16-17')} style={styles.ageButton}><Text style={styles.buttonText}>16-17</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('17-18')} style={styles.ageButton}><Text style={styles.buttonText}>17-18</Text></TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quizzes')} style={styles.menuButton}><Text style={styles.buttonText}>All Quizzes</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Videos')} style={styles.menuButton}><Text style={styles.buttonText}>All Videos</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Essays')} style={styles.menuButton}><Text style={styles.buttonText}>All Essays</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = HomeScreen;