//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking } from 'react-native';

//import style
var styles = require('../Styles.js');

//home screen
function EssaysScreen({navigation}) {
    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>Videos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')} style={styles.menuButton}><Text style={styles.buttonText}>Video 14-15</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')} style={styles.menuButton}><Text style={styles.buttonText}>Video 15-16</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')} style={styles.menuButton}><Text style={styles.buttonText}>Video 16-17</Text></TouchableOpacity>
            <View style={[styles.ageScreenMenuButtonHolder, {flex: 0.15}]}>
                <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')} style={[styles.ageScreenMenuButtonSplit, {marginRight: '2.5%'}]}><Text style={styles.buttonText}>Video 17-18  #1</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')} style={[styles.ageScreenMenuButtonSplit, {marginLeft: '2.5%'}]}><Text style={styles.buttonText}>Video 17-18  #2</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

//export
module.exports = EssaysScreen;