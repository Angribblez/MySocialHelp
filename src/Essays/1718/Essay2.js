//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Essay_1718_2({navigation}) { 

    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>Adult Interactions</Text>
            </TouchableOpacity>
            <ScrollView style={styles.essayScroll}>
                <Text style={styles.essayText}>                           
                    As you age, you will have to interact with adults who are not your parents. These interactions are incredibly important to master, as they are the foundation for when you eventually go out into the real world. In the real world, interacting with adults will become an everyday occurrence, so it is vital you get this skill down before you head off into adulthood. As a 17-18 year old heading into adulthood, it may still feel daunting to talk and socialize with adults. One reason behind this may be due to oneself still believing that they themselves are not adults, and that they cannot interact with them, or that they are not one of them. Jumping over this mental block could very well be the key to successfully working with adults. Being yourself and thinking in a way that drives home the idea that you are an adult now will allow for excellent conversation and interaction. Moreover, encouraging yourself to think of yourself as an adult, and throwing yourself into the interactions they have, will lead to you having more comfortable and easy adult to adult interactions.
                    {"\n"}{"\n"}Another potential roadblock in the way of successfully socializing with adults may stem from intimidation. It's easy to be scared or anxious when talking to an adult, as they are usually seen as authorities with power. To get past this, oneself can put themselves into situations where they must be around grown-ups. For instance, talking to counselors, teachers, parents, older family members, will slowly but surely build up a tolerance when socializing with people older than you. Try these tricks out next time you find yourself scared, nervous, or anxious when interacting with adults.
                    {"\n"}{"\n"}Written by Aaron Lopez
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

//export
module.exports = Essay_1718_2;