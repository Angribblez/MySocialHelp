//imports
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

//import style
var styles = require('../Styles.js');

//home screen
function SourcesScreen({navigation}) { 

    return (
        <SafeAreaView style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.titleBar}>
                <Text style={styles.titleText}>References</Text>
            </TouchableOpacity>
            <ScrollView style={styles.essayScroll}>
                <Text style={styles.essayText}>
                American Psychological Association. (n.d.). Public speaking anxiety. Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/specific-phobias/expert-answers/fear-of-public-speaking/faq-20058416 
                {"\n"}{"\n"}Christian, K. (2022, September 20). The truth about self-advocacy: Tips for speaking up and earning more. Forbes. https://www.forbes.com/sites/kwamechristian/2022/09/20/the-truth-about-self-advocacy-tips-for-speaking-up-and-earning-more/?sh=4d15a84119a1 
                {"\n"}{"\n"}Exceptional Lives. (n.d.). Self-advocacy for young adults: Fears. https://exceptionallives.org/blog/self-advocacy-young-adults-fears/ 
                {"\n"}{"\n"}Harvard Division of Continuing Education. (n.d.). 10 tips for improving your public speaking skills. https://professional.dce.harvard.edu/blog/10-tips-for-improving-your-public-speaking-skills/ 
                {"\n"}{"\n"}Insight by OpenExO. (n.d.). The power of saying no: From psychology to neuroscience. https://insight.openexo.com/the-power-of-saying-no-from-psychology-to-neuroscience/ 
                {"\n"}{"\n"}Mayo Clinic. (n.d.). Mayo Clinic Minute: The benefits of being socially connected. https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-minute-the-benefits-of-being-socially-connected/ 
                {"\n"}{"\n"}MentalHelp.net. (n.d.). Socialization. https://www.mentalhelp.net/self-help/socialization/ 
                {"\n"}{"\n"}Mind. (n.d.). Advocating for yourself. https://www.mind.org.uk/for-young-people/your-rights/advocating-for-yourself/ 
                {"\n"}{"\n"}National Institute of Mental Health. (n.d.). Social anxiety disorder. https://www.nimh.nih.gov/health/statistics/social-anxiety-disorder 
                {"\n"}{"\n"}National Social Anxiety Center. (2016, August 4). Public speaking and social anxiety. https://nationalsocialanxietycenter.com/2016/08/04/public-speaking-and-social-anxiety/ 
                {"\n"}{"\n"}Plato. (n.d.). Social norms. Stanford Encyclopedia of Philosophy. https://plato.stanford.edu/entries/social-norms/ 
                {"\n"}{"\n"}Psychology Today. (2013, July). Adolescence and learning: Interact with adults. https://www.psychologytoday.com/us/blog/surviving-your-childs-adolescence/201307/adolescence-and-learning-interact-adults 
                {"\n"}{"\n"}Psych Central. (n.d.). What are personal boundaries and how do I get some? https://psychcentral.com/relationships/what-are-personal-boundaries-how-do-i-get-some#what-they-are 
                {"\n"}{"\n"}Toastmasters International. (n.d.). Gestures and body language. https://www.toastmasters.org/resources/public-speaking-tips/gestures-and-body-language 
                {"\n"}{"\n"}U.S. Department of Education. (n.d.). A case study of self-advocacy in higher education. ERIC. https://files.eric.ed.gov/fulltext/EJ1274024.pdf 
                {"\n"}{"\n"}UC Santa Cruz Disability Resource Center. (n.d.). Self-advocacy. https://drc.ucsc.edu/general-resources/resources/online-resources/self-advocacy.html#:~:text=%E2%80%9CAn%20individual's%20ability%20to%20effectively,et%20al.%2C%201994). 
                {"\n"}{"\n"}Understood. (n.d.). The importance of self-advocacy. https://www.understood.org/en/articles/the-importance-of-self-advocacy 
                {"\n"}{"\n"}University of North Georgia Career Services. (n.d.). Tips for a successful interview. https://ung.edu/career-services/online-career-resources/interview-well/tips-for-a-successful-interview.php 
                {"\n"}{"\n"}University of Utah Parent Center. (n.d.). Tips for teens: Building self-advocacy skills. https://utahparentcenter.org/publications/infosheets/transadultinfosheets/tips-for-teens/ 
                {"\n"}{"\n"}University of Illinois at Chicago Wellness Center. (n.d.). Boundaries: What are they and how to create them. https://wellnesscenter.uic.edu/news-stories/boundaries-what-are-they-and-how-to-create-them/ 
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

//export
module.exports = SourcesScreen;