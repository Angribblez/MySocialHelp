//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Essay_1617_1({navigation}) { 

    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>AP Self-Advocacy</Text>
            </TouchableOpacity>
            <ScrollView style={styles.essayScroll}>
                <Text style={styles.essayText}>             
                    Self-advocacy is an executive skill that all adolescents need to become successful, healthy, well-rounded, and functioning young adults. To advocate is to communicate one's needs to be met properly. Advocacy is not just asking for help, it is being assertive and setting boundaries to ensure that one has all the available resources to be able to reach their full potential. This skill is not only utilized in classrooms and offices but also applies to all aspects of life, including relationships. Setting boundaries with others and advocating for yourself is  necessary for any healthy relationship. These boundaries help participating parties stay comfortable and safe, and prevent being taken advantage of. A common misconception is that self-advocacy is selfish and disruptive. However,  this is not the case as we should always communicate how to help others, even if that person is ourselves, it is essential to realize possible bias against oneself.
                    {"\n"}{"\n"}When setting boundaries and becoming more responsible for one's success it's important to remember the basic pillars of the foundation of self-advocacy. Start with analyzing what needs you have that are not currently being fulfilled, and take into account aspects of your well-being such as social, mental, emotional, physical, and spiritual health. Next is the most important step, communication. This step is incredibly prominent for many reasons, the biggest being confrontation and the fear that voicing your concerns may negatively affect the relationship with the person you are communicating with. For example, let's say you find yourself in a romantic relationship with another person and recently they have been exhibiting some behaviors that are causing you discomfort. In this scenario, you may feel obligated to let the behavior continue, but this is not the case. Setting boundaries is crucial to maintaining health, asserting wants, and communicating what needs to change. In this example, it is clear who to communicate with, but in other situations, it may not be, this is why it's important to understand who you are communicating with to ensure they can help fulfill your needs.
                    {"\n"}{"\n"}So let's recap some of the most important elements of self-advocacy: analyze your personal needs, establish how to get the help you need, assert yourself, communicate, stand up for yourself, and your needs. Self advocacy is only helpful in certain situations and scenarios, it's important to know when, and when not to self advocate. Assertive communication is self advocacy that states your position yet does not infringe on others wellbeing. Safety should always come first, if there is serious fear that your self advocacy could place you or others in danger there is a much bigger issue that needs to be addressed. As stated previously, self advocacy can be put into action in work,school,and relationships. While at work, it is important to communicate effectively to a manager or boss and maintain a respectful manner all while still advocating. You can advocate for shifts changes, pay raises, vacations, and any safety concerns. In school self-advocacy can play a considerable role in educational success. Advocating for grade changes, help/support, maintaining self reliance, and asking for opportunities. So, now that you know how and when to self advocate, go out into the world with your skills. And remember, you got this.
                    {"\n"}{"\n"}Written by Seviana Monforte
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

//export
module.exports = Essay_1617_1;