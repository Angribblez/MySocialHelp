//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity } from 'react-native';

//import style
var styles = require('../Styles.js');

//home screen
function EssaysScreen({navigation}) {
    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.titleBar, {marginBottom: 5}]}>
                <Text style={styles.titleText}>Articles</Text>
            </TouchableOpacity>
            <View style={styles.ageBar}>
                <View style={styles.ageRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1415_1')} style={styles.ageButton}><Text style={styles.buttonText}>Starting High School</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1415_2')} style={styles.ageButton}><Text style={styles.buttonText}>Social Common Sense</Text></TouchableOpacity>
                </View>
                <View style={styles.ageRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1516_1')} style={styles.ageButton}><Text style={styles.buttonText}>Manners Matter?</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1516_2')} style={styles.ageButton}><Text style={styles.buttonText}>Advocate For Yourself</Text></TouchableOpacity>
                </View>
                <View style={styles.ageRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1617_1')} style={styles.ageButton}><Text style={styles.buttonText}>AP Self-Advocacy</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1617_2')} style={styles.ageButton}><Text style={styles.buttonText}>Personal Boundaries</Text></TouchableOpacity>
                </View>
                <View style={styles.ageRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1718_1')} style={styles.ageButton}><Text style={styles.buttonText}>Public Speaking</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Essay_1718_2')} style={styles.ageButton}><Text style={styles.buttonText}>Adult Interactions</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

//export
module.exports = EssaysScreen;