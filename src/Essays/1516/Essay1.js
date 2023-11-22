//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Essay_1516_1({navigation}) { 

    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>Manners Matter?</Text>
            </TouchableOpacity>
            <ScrollView style={styles.essayScroll}>
                <Text style={styles.essayText}>
                With our ever-evolving and technological world, many of the social norms that seemed simple decades ago now seem to be more difficult to comprehend, especially for teenagers learning how to build relationships, connect with others, and emerge into adulthood. One social skill that tends to be overlooked is manners. Manners are the cornerstone of etiquette and good character. In Frank Sonnenburg's words, an esteemed self-help author, “Good or bad manners say volumes about you and your upbringing. Manners show politeness and demonstrate an awareness of self-worth, respect for others, and a desire to fit in” (Sonnenburg 2016). 
                {"\n"}{"\n"}Before we begin, it is important to know what manners are in order for you to understand why they are so critical in everyday life and.how to apply them, Manners, as stated by Oxford Languages, is “a person's outward bearing or way of behaving toward others” (oup.com 2023). This approach is often our guiding principle when communicating to others and meeting new people. Manners are a way of making a good first impression as they help form the baseline for someone's character, which is key for teens to understand when they start to communicate more often with adults and teachers. Professor and social author Pier Forni puts it best, “Think of manners as traffic lights for life. On the road, traffic lights turn a world full of cars moving in different directions into an orderly system that allows everyone to get where they are going” (Forni n.d). Forni's comparison of manners in the social world to traffic lights on the road highlights the importance of understanding manners in a social setting, especially for teenagers like you going into adulthood and encountering more professional social situations such as job or college interviews, large scale presentations, or frequent communication with administrators and principals. 
                {"\n"}{"\n"}Equally important to the vitality of understanding manners, is the application and quality of the manners themselves. Manners not only extend to just saying “please” and “thank you”, but also include keeping up with basic hygiene, avoiding use of phones during conversations, maintaining eye contact, being courteous, and more (Chabbra, n.d). Mastering these basic rules of etiquette can go a long way as they become more of a habit rather than something to always think about. In addition, it is also crucial to know when to apply these manners in order for you to understand at what times you should be acting with more respect and regard than you normally do. For example, during a job interview, your demeanor should be more focused and prepared, as opposed to laid back or casual. This can mean dressing formally, shaking hands with the employer, maintaining eye contact with the interviewer, holding good body posture, answering questions in a clear and concise tone, and keeping the tone professional, which highlights to the employer how you value yourself and how you act towards others in a workplace setting (uiowa.edu, 2022). All these etiquette skills can become habits that are important to improve on in order to establish a good impression, which is key for teenagers to comprehend as they start shifting more into professional environments. 
                {"\n"}{"\n"}Moreover, manners can also apply to everyday situations, not just formal settings. To illustrate, while holding the door for someone is a simple gesture, it can make someone's day a little easier (Markman 2011). Another example is mindful listening, which is often forgotten due to the many distractions in our world, as explained by Rebecca Shafir, a speech writer, “...the average person can remember only 25 percent of what someone has said, just a few minutes after a conversation (Shafir, n.d). This highlights how difficult it is to truly listen to someone during a discussion due to the many potential distractions such as phones, background noise, internal thoughts, and short attention spans, which can be traced to the mental exhaustion of the COVID-19 Pandemic (Oliver, 2021). To mitigate this issue of a lack of mindful listening, one can remove controllable distractions from the environment during conversation, validate or follow up on ideas and questions, pay attention to social cues such as tone of voice or physical reactions, and foster empathy in order to understand the conversation at a deeper level. These mindful listening tips not only allow for more retention for information, but also shows respectful manners, etiquette, and listening skills, all which represent an all-around good, and socially healthy character. 
                {"\n"}{"\n"}Ultimately, good manners are fundamental for all different age groups, but especially for teenagers due to their new experiences, emergence into adulthood, and more frequent conversation in formal settings. Teenagers can improve on and learn manners through ways of practice and constant development during social interactions, which can help them more easily build relationships, establish boundaries, and connect with others.
                {"\n"}{"\n"}Written by Joshua Bautista
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

//export
module.exports = Essay_1516_1;