//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Essay_1617_2({navigation}) { 

    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>Personal Boundaries</Text>
            </TouchableOpacity>
            <ScrollView style={styles.essayScroll}>
                <Text style={styles.essayText}>
                Have you ever felt uncomfortable in a social situation? Perhaps a person made you feel awkward or maybe you were forced to do something against your consent. These are all examples of personal boundaries being invaded and not honored. To define, personal boundaries as stated by PsychCentral are, “... lines we draw for ourselves in terms of our level of comfort around others” (PsychCentral.com, n.d). These boundaries can range from physical, verbal, and emotional, which are all equally important when confronting more social interactions, especially for teens. 
                {"\n"}{"\n"}One of the many themes that teenagers can find challenging is fitting in, and while it is important to do so in order to connect with others, it is also just as important to set aside personal boundaries. Personal boundaries “help us to build trust, safety, and respect in relationships” (Stanford.edu). These are vital to establish because without boundaries, individuals may feel stressed, pressured, and indignant due to a lack of guidelines in a relationship. Further, established boundaries can show to others a sense of control over one's emotions, highlight feelings of self-esteem and value, and overall create healthier relationships with others (Litwa, 2023). 
                {"\n"}{"\n"}In addition to the importance of establishing boundaries, it is also crucial to learn when to say no in a social setting. Take for example a late night party and an individual is forced into taking a sip of alcohol. In this instance, it is key to respectfully and directly say no to the offer. It is more important to prioritize oneself and not fall into peer pressure. In Barbazzeni's words, a psychology writer and Phd student in neuroscience, “Being in charge of your own decision and feeling free to prioritize your needs is not rude, and learning to decline one's request with grace and kindness would let you feel good about it without regrets” (Barbazzeni, 2022). Here Barbazzeni explains the power of saying no and how vital it is to one's mental health. Moreover, this is a common dilemma many teens face as they partake in more social gatherings, emphasizing the need for the skills of setting boundaries and saying no. 
                {"\n"}{"\n"}These skills can be improved upon by a variety of methods such as starting with applying soft boundaries. Soft boundaries, as stated by Joe Sanok, a writer in the Harvard Business Review, are “Boundaries that are more like wishes, and that you are willing to compromise on. Think of them as goals you want to reach but are flexible around” (Sanok, 2022). To elaborate, a simple soft boundary may be reserving a day on the weekend to spend time with family instead of hanging out or partying. One can say to a friend, “I would love to hang out, but today I was planning on eating out with my family, as I have been so caught up with school work. How about next week on a different day? I sure would love to go!” Here, a simple boundary is created which others can acknowledge and adapt upon, a win for both parties and also oneself. This method of setting soft boundaries can help individuals practice setting more complex boundaries in the future along with maintaining healthy relationships. 
                {"\n"}{"\n"}Sooner or later, setting boundaries is an important skill to learn and apply especially for teens emerging into adulthood and more frequently being involved in many various social situations. Knowing when to say no, establishing soft boundaries, and overall keeping personal integrity are all ways to improve on setting personal boundaries.
                {"\n"}{"\n"}Written by Joshua Bautista
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

//export
module.exports = Essay_1617_2;