//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../../Styles.js');

//home screen
function Essay_1516_2({navigation}) { 

    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>Advocate For Yourself</Text>
            </TouchableOpacity>
            <ScrollView style={styles.essayScroll}>
                <Text style={styles.essayText}>
                    Advocating for oneself is vital in taking responsibility for one's personal success. Self-advocacy is the practice of communicating and asserting oneself based on personal needs, desires, rights, and interests. Implementing boundaries is a key aspect of self-advocating. Personal boundaries help us maintain respect, trust, safety, and comfortability. It is important to remember that assertiveness does not equate to aggressiveness, it is simply vocalizing to ensure your needs are met. Practicing assertiveness throughout adolescence builds self-confidence, and conflict-resolution practices, and increases independence. Lack of assertiveness can lead to numerous negative effects that otherwise could have been prevented and can lead to more serious issues later in life such as unhealthy or unstable relationships, manipulation, increased anxiety, and low self-esteem. Self-advocacy is beneficial in all areas of life from relationships to education, it has been shown to greatly increase rates of success in school and professional environments. (Pfeifer, M. A., Reiter, E. M., Cordero, J. J., & Stanton, J. D. (2021, June. CBE life sciences education. ). Applications of this practice can start as small as asking for help from a peer or instructor. Practicing these smaller vocalizations aid in bigger applications, such as asking for an extension or even a pay raise.
                    {"\n"}{"\n"}Learning how to communicate for oneself may feel daunting, but the benefits outweigh the pressures. As with any skill, self-advocacy takes practice, following the key points of self advocation is the best method to begin acquiring effective personal communication abilities. Establishing one's values and needs is crucial to being able to communicate effectively what is necessary for personal success. Effective communication of issues is important when self-advocating to ensure the outcome one hopes to achieve. When being assertive, remember to use “I” statements, and maintain positive body language. Speaking up for oneself can be frightening for many, to help counter this when self-advocating it's important to start small. Successful attempts at self-advocacy can start as small as asking a question. Rehearsing what you are going to say beforehand can be a simple incredibly effective step when countering social anxiety.
                    {"\n"}{"\n"}Self-advocacy is an effective skill to obtain the necessities for success. It can be used in all aspects of life from setting boundaries in relationships to advocating for a better position in a job. Some examples of simple self-advocacy are requisition for an extension on an assignment, advocating for a certain position in a project, and requesting certain work shifts. All aspects of advocating on one's behalf depend on being assertive when decisions and actions, or conditions, affect one's personal well-being.
                    {"\n"}{"\n"}Written by Seviana Monforte
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

//export
module.exports = Essay_1516_2;