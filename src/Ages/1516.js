//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Pressable, TouchableOpacity } from 'react-native';

//import style
var styles = require('../Styles.js');

//home screen
function Age1516({navigation}) {
    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>15-16</Text>
            </TouchableOpacity>
            <View style={styles.ageScreenImageHolder}></View>
            <View style={styles.ageScreenMenu}>
                <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')} style={styles.ageScreenMenuButton}><Text style={styles.buttonText}>Instructional Video</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz_1516_Q1')} style={styles.ageScreenMenuButton}><Text style={styles.buttonText}>Interactive Quiz</Text></TouchableOpacity>
                <View style={styles.ageScreenMenuButtonHolder}>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1516_1')} style={[styles.ageScreenMenuButtonSplit, {marginRight: '2.5%'}]}><Text style={styles.buttonText}>Manners Matter?</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1516_2')} style={[styles.ageScreenMenuButtonSplit, {marginLeft: '2.5%'}]}><Text style={styles.buttonText}>Advocate For Yourself</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

//export
module.exports = Age1516;