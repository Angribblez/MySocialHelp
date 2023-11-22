//imports
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import pages
var HomeScreen = require('./src/Main/Home.js');
var EssaysScreen = require('./src/Main/Essays.js');
var QuizzesScreen = require('./src/Main/Quizzes.js');
var VideosScreen = require('./src/Main/Videos.js');
var SourcesScreen = require('./src/Main/Sources.js');
var Age1415 = require('./src/Ages/1415.js');
var Age1516 = require('./src/Ages/1516.js');
var Age1617 = require('./src/Ages/1617.js');
var Age1718 = require('./src/Ages/1718.js');
var Essay_1415_1 = require('./src/Essays/1415/Essay1.js');
var Essay_1415_2 = require('./src/Essays/1415/Essay2.js');
var Essay_1516_1 = require('./src/Essays/1516/Essay1.js');
var Essay_1516_2 = require('./src/Essays/1516/Essay2.js');
var Essay_1617_1 = require('./src/Essays/1617/Essay1.js');
var Essay_1617_2 = require('./src/Essays/1617/Essay2.js');
var Essay_1718_1 = require('./src/Essays/1718/Essay1.js');
var Essay_1718_2 = require('./src/Essays/1718/Essay2.js');
var Quiz_1415_Q1 = require('./src/Quizzes/1415/Quiz_Q1.js');
var Quiz_1415_Q1_Correct = require('./src/Quizzes/1415/Quiz_Q1_Correct.js');
var Quiz_1415_Q1_Incorrect = require('./src/Quizzes/1415/Quiz_Q1_Incorrect.js');
var Quiz_1415_Q2 = require('./src/Quizzes/1415/Quiz_Q2.js');
var Quiz_1415_Q2_Correct = require('./src/Quizzes/1415/Quiz_Q2_Correct.js');
var Quiz_1415_Q2_Incorrect = require('./src/Quizzes/1415/Quiz_Q2_Incorrect.js');
var Quiz_1415_Q3 = require('./src/Quizzes/1415/Quiz_Q3.js');
var Quiz_1415_Q3_Correct = require('./src/Quizzes/1415/Quiz_Q3_Correct.js');
var Quiz_1415_Q3_Incorrect = require('./src/Quizzes/1415/Quiz_Q3_Incorrect.js');
var Quiz_1415_Q4 = require('./src/Quizzes/1415/Quiz_Q4.js');
var Quiz_1415_Q4_Correct = require('./src/Quizzes/1415/Quiz_Q4_Correct.js');
var Quiz_1415_Q4_Incorrect = require('./src/Quizzes/1415/Quiz_Q4_Incorrect.js');
var Quiz_1415_Passed = require('./src/Quizzes/1415/Quiz_Passed.js');
var Quiz_1415_Failed = require('./src/Quizzes/1415/Quiz_Failed.js');
var Quiz_1516_Q1 = require('./src/Quizzes/1516/Quiz_Q1.js');
var Quiz_1516_Q1_Correct = require('./src/Quizzes/1516/Quiz_Q1_Correct.js');
var Quiz_1516_Q1_Incorrect = require('./src/Quizzes/1516/Quiz_Q1_Incorrect.js');
var Quiz_1516_Q2 = require('./src/Quizzes/1516/Quiz_Q2.js');
var Quiz_1516_Q2_Correct = require('./src/Quizzes/1516/Quiz_Q2_Correct.js');
var Quiz_1516_Q2_Incorrect = require('./src/Quizzes/1516/Quiz_Q2_Incorrect.js');
var Quiz_1516_Q3 = require('./src/Quizzes/1516/Quiz_Q3.js');
var Quiz_1516_Q3_Correct = require('./src/Quizzes/1516/Quiz_Q3_Correct.js');
var Quiz_1516_Q3_Incorrect = require('./src/Quizzes/1516/Quiz_Q3_Incorrect.js');
var Quiz_1516_Passed = require('./src/Quizzes/1516/Quiz_Passed.js');
var Quiz_1516_Failed = require('./src/Quizzes/1516/Quiz_Failed.js');
var Quiz_1617_Q1 = require('./src/Quizzes/1617/Quiz_Q1.js');
var Quiz_1617_Q1_Correct = require('./src/Quizzes/1617/Quiz_Q1_Correct.js');
var Quiz_1617_Q1_Incorrect = require('./src/Quizzes/1617/Quiz_Q1_Incorrect.js');
var Quiz_1617_Q2 = require('./src/Quizzes/1617/Quiz_Q2.js');
var Quiz_1617_Q2_Correct = require('./src/Quizzes/1617/Quiz_Q2_Correct.js');
var Quiz_1617_Q2_Incorrect = require('./src/Quizzes/1617/Quiz_Q2_Incorrect.js');
var Quiz_1617_Q3 = require('./src/Quizzes/1617/Quiz_Q3.js');
var Quiz_1617_Q3_Correct = require('./src/Quizzes/1617/Quiz_Q3_Correct.js');
var Quiz_1617_Q3_Incorrect = require('./src/Quizzes/1617/Quiz_Q3_Incorrect.js');
var Quiz_1617_Passed = require('./src/Quizzes/1617/Quiz_Passed.js');
var Quiz_1617_Failed = require('./src/Quizzes/1617/Quiz_Failed.js');
var Quiz_1718_Q1 = require('./src/Quizzes/1718/Quiz_Q1.js');
var Quiz_1718_Q1_Correct = require('./src/Quizzes/1718/Quiz_Q1_Correct.js');
var Quiz_1718_Q1_Incorrect = require('./src/Quizzes/1718/Quiz_Q1_Incorrect.js');
var Quiz_1718_Q2 = require('./src/Quizzes/1718/Quiz_Q2.js');
var Quiz_1718_Q2_Correct = require('./src/Quizzes/1718/Quiz_Q2_Correct.js');
var Quiz_1718_Q2_Incorrect = require('./src/Quizzes/1718/Quiz_Q2_Incorrect.js');
var Quiz_1718_Q3 = require('./src/Quizzes/1718/Quiz_Q3.js');
var Quiz_1718_Q3_Correct = require('./src/Quizzes/1718/Quiz_Q3_Correct.js');
var Quiz_1718_Q3_Incorrect = require('./src/Quizzes/1718/Quiz_Q3_Incorrect.js');
var Quiz_1718_Q4 = require('./src/Quizzes/1718/Quiz_Q4.js');
var Quiz_1718_Q4_Correct = require('./src/Quizzes/1718/Quiz_Q4_Correct.js');
var Quiz_1718_Q4_Incorrect = require('./src/Quizzes/1718/Quiz_Q4_Incorrect.js');
var Quiz_1718_Q5 = require('./src/Quizzes/1718/Quiz_Q5.js');
var Quiz_1718_Q5_Correct = require('./src/Quizzes/1718/Quiz_Q5_Correct.js');
var Quiz_1718_Q5_Incorrect = require('./src/Quizzes/1718/Quiz_Q5_Incorrect.js');
var Quiz_1718_Q6 = require('./src/Quizzes/1718/Quiz_Q6.js');
var Quiz_1718_Q6_Correct = require('./src/Quizzes/1718/Quiz_Q6_Correct.js');
var Quiz_1718_Q6_Incorrect = require('./src/Quizzes/1718/Quiz_Q6_Incorrect.js');
var Quiz_1718_Q7 = require('./src/Quizzes/1718/Quiz_Q7.js');
var Quiz_1718_Q7_Correct = require('./src/Quizzes/1718/Quiz_Q7_Correct.js');
var Quiz_1718_Q7_Incorrect = require('./src/Quizzes/1718/Quiz_Q7_Incorrect.js');
var Quiz_1718_Passed = require('./src/Quizzes/1718/Quiz_Passed.js');
var Quiz_1718_Failed = require('./src/Quizzes/1718/Quiz_Failed.js');


//stack and app creation
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Essays" component={EssaysScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Quizzes" component={QuizzesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Videos" component={VideosScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Sources" component={SourcesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="14-15" component={Age1415} options={{ headerShown: false }}/>
        <Stack.Screen name="15-16" component={Age1516} options={{ headerShown: false }}/>
        <Stack.Screen name="16-17" component={Age1617} options={{ headerShown: false }}/>
        <Stack.Screen name="17-18" component={Age1718} options={{ headerShown: false }}/>
        <Stack.Screen name="Essay_1415_1" component={Essay_1415_1} options={{ headerShown: false }}/>
        <Stack.Screen name="Essay_1415_2" component={Essay_1415_2} options={{ headerShown: false }}/>
        <Stack.Screen name="Essay_1516_1" component={Essay_1516_1} options={{ headerShown: false }}/>
        <Stack.Screen name="Essay_1516_2" component={Essay_1516_2} options={{ headerShown: false }}/>
        <Stack.Screen name="Essay_1617_1" component={Essay_1617_1} options={{ headerShown: false }}/>
        <Stack.Screen name="Essay_1617_2" component={Essay_1617_2} options={{ headerShown: false }}/>
        <Stack.Screen name="Essay_1718_1" component={Essay_1718_1} options={{ headerShown: false }}/>
        <Stack.Screen name="Essay_1718_2" component={Essay_1718_2} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q1" component={Quiz_1415_Q1} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q1_Correct" component={Quiz_1415_Q1_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q1_Incorrect" component={Quiz_1415_Q1_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q2" component={Quiz_1415_Q2} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q2_Correct" component={Quiz_1415_Q2_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q2_Incorrect" component={Quiz_1415_Q2_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q3" component={Quiz_1415_Q3} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q3_Correct" component={Quiz_1415_Q3_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q3_Incorrect" component={Quiz_1415_Q3_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q4" component={Quiz_1415_Q4} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q4_Correct" component={Quiz_1415_Q4_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Q4_Incorrect" component={Quiz_1415_Q4_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Passed" component={Quiz_1415_Passed} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1415_Failed" component={Quiz_1415_Failed} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Q1" component={Quiz_1516_Q1} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Q1_Correct" component={Quiz_1516_Q1_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Q1_Incorrect" component={Quiz_1516_Q1_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Q2" component={Quiz_1516_Q2} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Q2_Correct" component={Quiz_1516_Q2_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Q2_Incorrect" component={Quiz_1516_Q2_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Q3" component={Quiz_1516_Q3} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Q3_Correct" component={Quiz_1516_Q3_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Q3_Incorrect" component={Quiz_1516_Q3_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Passed" component={Quiz_1516_Passed} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1516_Failed" component={Quiz_1516_Failed} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Q1" component={Quiz_1617_Q1} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Q1_Correct" component={Quiz_1617_Q1_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Q1_Incorrect" component={Quiz_1617_Q1_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Q2" component={Quiz_1617_Q2} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Q2_Correct" component={Quiz_1617_Q2_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Q2_Incorrect" component={Quiz_1617_Q2_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Q3" component={Quiz_1617_Q3} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Q3_Correct" component={Quiz_1617_Q3_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Q3_Incorrect" component={Quiz_1617_Q3_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Passed" component={Quiz_1617_Passed} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1617_Failed" component={Quiz_1617_Failed} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q1" component={Quiz_1718_Q1} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q1_Correct" component={Quiz_1718_Q1_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q1_Incorrect" component={Quiz_1718_Q1_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q2" component={Quiz_1718_Q2} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q2_Correct" component={Quiz_1718_Q2_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q2_Incorrect" component={Quiz_1718_Q2_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q3" component={Quiz_1718_Q3} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q3_Correct" component={Quiz_1718_Q3_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q3_Incorrect" component={Quiz_1718_Q3_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q4" component={Quiz_1718_Q4} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q4_Correct" component={Quiz_1718_Q4_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q4_Incorrect" component={Quiz_1718_Q4_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q5" component={Quiz_1718_Q5} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q5_Correct" component={Quiz_1718_Q5_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q5_Incorrect" component={Quiz_1718_Q5_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q6" component={Quiz_1718_Q6} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q6_Correct" component={Quiz_1718_Q6_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q6_Incorrect" component={Quiz_1718_Q6_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q7" component={Quiz_1718_Q7} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q7_Correct" component={Quiz_1718_Q7_Correct} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Q7_Incorrect" component={Quiz_1718_Q7_Incorrect} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Passed" component={Quiz_1718_Passed} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz_1718_Failed" component={Quiz_1718_Failed} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//export
export default App;