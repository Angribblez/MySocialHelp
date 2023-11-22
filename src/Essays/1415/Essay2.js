//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Essay_1415_2({navigation}) { 

    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>Social Common Sense</Text>
            </TouchableOpacity>
            <ScrollView style={styles.essayScroll}>
                <Text style={styles.essayText}>
                    Common sense does not only apply to making obvious decisions, it can also apply to socializing with people. Social common sense is not as common as one might think, so, no need to worry if you believe you lack social common sense. Common sense according to Oxford Languages is defined as “good sense and sound judgment in practical matters”. Applying this to everyday interactions can improve one's ability to make decisions and judgements in social situations. For instance, when meeting someone for the first time, common sense would argue that you introduce yourself. This skill is essential as it allows growing young adults to produce actions that are acceptable, and in some cases praisable, among their peers. As you age through adolescence, conversing with friends, family, or even strangers becomes a more frequent task. This makes talking to people a vital skill to possess, due to the recurrence and importance of the skill. 
                    {"\n"}{"\n"}Ways to build up this skill include joining clubs, sports, after school activities, as well as introducing yourself to people who you see frequently such as neighbors and classmates and initiating contact with close friends and family. Practicing person to person interactions in these ways allows oneself to improve their social skills. According to MentalHealth.Net, “Time spent socializing can help build your confidence” . Thus, if you practice socializing little by little, then oneself is able to naturally build up social common sense. Additionally, as you age, if you continue practicing and building on these skills you will develop the utmost communications skills, gaining excellent social common sense. Remember, you got this!
                    {"\n"}{"\n"}Written by Aaron Lopez
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

//export
module.exports = Essay_1415_2;