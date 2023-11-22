//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Essay_1415_1({navigation}) { 

    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>Starting High School</Text>
            </TouchableOpacity>
            <ScrollView style={styles.essayScroll}>
                <Text style={styles.essayText}>
                    Yay! You're starting your first year of highschool! There is so much to think about; should I take challenging classes? What clubs should I be in? Will my friends be there? Is this the right school for me? But don't worry!
                    {"\n"}{"\n"}The most important thing in highschool is to learn as much as possible, not to be the perfect student or the perfect friend. People make mistakes, so grow from them.
                    {"\n"}{"\n"}It's your first day of school, you show up after freshman orientation and are still completely lost. No problem! Look around for that school map you received and remain calm, you are in the same boat as the other 700 freshmen. Now that you have found your classes, do your best and don't skip! The grades you get in freshman year still matter on your transcript, so be attentive, ask plenty of  questions, and begin to prioritize homework. Speaking of! It may be time for you to begin keeping an agenda so you can keep track of all those projects and essays. Writing down all your assignments helps you to learn time management so this year can be as stress-free as possible. 
                    {"\n"}{"\n"}Okay, you've picked your classes, including lots of fun electives! Now it's time to discover the school community through some clubs! Clubs are a great opportunity to make friends, learn communication skills, and foster creative thinking. Most of your freshman year is a lesson about time management, so get ahead of it by using those methods. Come back soon, you got this!
                    {"\n"}{"\n"}Written by Emma Sandusky
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

//export
module.exports = Essay_1415_1;