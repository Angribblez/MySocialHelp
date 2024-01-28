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
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.titleBar, {marginBottom: 5}]}>
                <Text style={styles.titleText}>Videos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dBQMeuK4H2o')} style={styles.menuButton}><Text style={styles.buttonText}>14-15 - Connecting With Strangers</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=nb5o42qqvCE-')} style={styles.menuButton}><Text style={styles.buttonText}>15-16 - First Interview</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=EVO_Zmq-Wmc')} style={styles.menuButton}><Text style={styles.buttonText}>16-17 - Professional Intros</Text></TouchableOpacity>
            <View style={[styles.ageScreenMenuButtonHolder, {flex: 0.15}]}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=OzxmUZWkdE8')} style={[styles.ageScreenMenuButtonSplit, {marginRight: '2.5%'}]}><Text style={styles.buttonText}>17-18 #1 - Friendly Introductions</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')} style={[styles.ageScreenMenuButtonSplit, {marginLeft: '2.5%'}]}><Text style={styles.buttonText}>17-18 #2 - Establishing Personal Boundaries</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

//export
module.exports = EssaysScreen;