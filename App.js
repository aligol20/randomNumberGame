/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import GuessSingleItem from './src/components/atoms/GuessSingleItem';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [userGuess, setUserGuess] = useState('');
  const [gusses, setGuesses] = useState([]);
  const [randomNumber, setRandomNumber] = useState('');

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPredictPressed = () => {
    setGuesses([userGuess, ...gusses]);
    setUserGuess('');
  };

  const generateRandomNumber = () => {
    let temp = [];

    while (temp?.length < 4) {
      const randomNum = Math.floor(Math.random() * 10);
      if (temp.indexOf(randomNum) === -1) temp.push(randomNum);
    }

    setRandomNumber(temp.join(''));
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
        <Text style={{height: 50}}>{randomNumber}</Text>
        <View style={{flexDirection: 'row', height: 40}}>
          <TextInput
            style={{
              width: '80%',
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}
            onChangeText={setUserGuess}
            value={userGuess}
            maxLength={4}
            keyboardType="number-pad"
            placeholder="Your guess"
          />
          <Pressable
            style={{
              backgroundColor: 'purple',
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={onPredictPressed}>
            <Text>{'Predict'}</Text>
          </Pressable>
        </View>

        {gusses?.map((guess, index) => {
          return (
            <GuessSingleItem
              key={index}
              userGuess={guess}
              correctNumber={'2546'}
            />
          );
        })}
      </View>

      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
