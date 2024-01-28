//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

//import style
var styles = require('../Styles.js');

//home screen
function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity style={styles.titleBar}>
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
            <TouchableOpacity onPress={() => navigation.navigate('Quizzes')} style={[styles.menuButton, {flex:0.45/3}]}><Text style={styles.buttonText}>All Quizzes</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Videos')} style={[styles.menuButton, {flex:0.45/3}]}><Text style={styles.buttonText}>All Videos</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Essays')} style={[styles.menuButton, {flex:0.45/3}]}><Text style={styles.buttonText}>All Articles</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sources')} style={[styles.menuButton, {flex:0.45/3}]}><Text style={styles.buttonText}>References</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = HomeScreen;