import React from 'react';
import {View, Text} from 'react-native';

const GuessSingleItem = ({correctNumber, userGuess}) => {
  const getUserGuessScore = (userGuess, correctNumber) => {
    let score = '';

    for (let i = 0; i < correctNumber?.length; i++) {
      if (
        userGuess?.includes(correctNumber[i]) &&
        correctNumber[i] === userGuess[i]
      ) {
        score = score + '+';
      }
      if (
        userGuess?.includes(correctNumber[i]) &&
        correctNumber[i] !== userGuess[i]
      ) {
        score = score + '-';
      }
    }

    return score;
  };
  return (
    <View style={{height: 50, width: '100%', flexDirection: 'row'}}>
      <Text>{userGuess}</Text>
      <Text>{getUserGuessScore(userGuess, correctNumber)}</Text>
    </View>
  );
};

export default GuessSingleItem;
