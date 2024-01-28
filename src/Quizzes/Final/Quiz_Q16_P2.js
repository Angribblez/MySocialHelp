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
            <View style={[styles.menuButton, {marginTop: 20, marginBottom: 5, flex: 0.6}]}>
                <Text style={[styles.buttonText, {fontSize: 17}]}>After a week of spending time with his family, Francis starts feeling more comfortable with interacting with adults around him. Although he is making progress, Francis feels that he needs to expand his interactions outside the family. One of his friends assures him that he is well prepared, but he is still not confident. How should he respond to this situation? 1) Go along with what his friend says even though he doesn't feel prepared and spend his remaining days going out or 2) Go out with his friends for the remaining 7 days, but still dedicate at least one hour spending time with trusted adults outside the family to increase interaction and maintain practice.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q16_A1')} style={[styles.menuButton, {flex:0.2}]}><Text style={styles.buttonText}>Go along with what his friend says even though he doesn't feel prepared, and spend his remaining days going out.</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz_Final_Q16_A2')} style={[styles.menuButton, {flex:0.2}]}><Text style={styles.buttonText}>Go out with his friends for the remaining 7 days, but still dedicate at least one hour to spending time with trusted adults outside the family.</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

//export
module.exports = Quiz;