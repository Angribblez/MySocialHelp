//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Pressable, TouchableOpacity } from 'react-native';

//import style
var styles = require('../Styles.js');

//home screen
function Age1718({navigation}) {
    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>17-18</Text>
            </TouchableOpacity>
            <View style={styles.ageScreenImageHolder}></View>
            <View style={styles.ageScreenMenu}>
                <View style={styles.ageScreenMenuButtonHolder}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')} style={[styles.ageScreenMenuButtonSplit, {marginRight: '2.5%'}]}><Text style={styles.buttonText}>Instructional Video 1</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')} style={[styles.ageScreenMenuButtonSplit, {marginLeft: '2.5%'}]}><Text style={styles.buttonText}>Instructional Video 2</Text></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz_1718_Q1')} style={styles.ageScreenMenuButton}><Text style={styles.buttonText}>Interactive Quiz</Text></TouchableOpacity>
                <View style={styles.ageScreenMenuButtonHolder}>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1718_1')} style={[styles.ageScreenMenuButtonSplit, {marginRight: '2.5%'}]}><Text style={styles.buttonText}>Public Speaking</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1718_2')} style={[styles.ageScreenMenuButtonSplit, {marginLeft: '2.5%'}]}><Text style={styles.buttonText}>Adult Interactions</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

//export
module.exports = Age1718;