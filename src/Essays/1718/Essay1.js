//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Essay_1718_1({navigation}) { 

    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>Public Speaking</Text>
            </TouchableOpacity>
            <ScrollView style={styles.essayScroll}>
                <Text style={styles.essayText}>             
                Communication is a fundamental characteristic that allows individuals to lead a positive social life. Throughout the course of time, public speaking can prove to be an essential mechanism of establishing an improved conversational rapport. The Cambridge Dictionary defines it as “the activity of speaking on a subject to a group of people”. Amongst teenagers, this mechanism has become an issue that poses a crucial barrier for effective communication. Challenges regarding this form of speaking stem from various factors, which in recent post pandemic years, have led to vast increases in the lack of the skill itself. 
                {"\n"}{"\n"}Social Anxiety is a key factor contributing to insufficiencies in the skillset of public speaking within teenagers. According to Dev Cogn Neurosci, a published writer on the National Center for Biotechnological Information, data has shown that approximately 75% of advanced forms of social anxiety present themselves in adolescents (Neurosci, 2015). Self-consciousness increases alongside the progression of age, causing heightened anxiety regarding embarrassment, judgment, and shame. Due to the increase in various fears caused by social anxiety, adolescents are likely to refrain from the act of speaking in public. Craig N. Sawchuk at the Mayo Clinic describes that individuals with a fear of public speaking are likely to either avoid it all together or suffer through it (Sawchuk, 2017). The avoidance of this by teenagers is inevitably followed by a subpar development in the specific skill set, causing inadequate communication abilities among a vast majority. 
                {"\n"}{"\n"}Despite the existing difficulties faced by teenagers in present times regarding public speaking, you must acknowledge the fact that improvements can still occur to enhance communicative abilities. Marjorie North, a communication development specialist at Harvard University, suggests that individuals practice in small groups to improve their communication skills (North, 2020). In order to build more confidence, you can begin by practicing in front of small audiences and gradually increase population size as they strive to surpass their current capabilities. Effective body language is a distinctive quality of exemplary rhetoric skill. Through the use of engaging body language, such as hand gestures, you are able to enhance the clarity of your speech, while still maintaining professional composure and overcoming the stress of social anxiety. Alongside these strategies, numerous resources, such as speech developmental programs, are available to individuals throughout communities. If teenagers seek out these resources and follow through with determination and perseverance, they are more than likely to strengthen their proficiencies in verbal communication. 
                {"\n"}{"\n"}To conclude, public speaking is a crucial aspect of communication. In recent years, teenagers have begun to face increasing gaps in the ability to effectively communicate among audiences. However, in spite of these difficulties, various opportunities are available to assist teenagers to further develop their skill in effective communication. With consistent utilization of present resources and methods of improvement, teenagers have high potential in strengthening their art of speaking.
                {"\n"}{"\n"}Written by Angel Gagurel
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

//export
module.exports = Essay_1718_1;