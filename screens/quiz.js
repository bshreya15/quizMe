import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&encode=url3986';
    const resp = await fetch(url);
    const data = await resp.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques+1]))
  };
  const generateOptionsAndShuffle = _question => {
    const options = [, ..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };
  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q. {decodeURIComponent(questions[ques].question)}
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText1}>SKIP</Text>
            </TouchableOpacity>
            {ques !== 9 ? (
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText2}>NEXT</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                <Text style={styles.buttonText3}>END</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    // padding: 40,
    // paddingHorizontal: 20,
    height: '100%',
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  parent: {
    height: '100%',
    padding: 20,
  },
  top: {
    marginVertical: 16,
    flex: 0.5,
    flexDirection: 'column',
  },

  question: {
    fontSize: 28,
    color: 'black',
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  optionButton: {
    padding: 10,
    marginVertical: 6,
    backgroundColor: '#d49db7',
    borderRadius: 12,
  },
  option: {
    fontWeight: '600',
    fontSize: 18,
    color: '#fff',
  },
  footerContainer: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    marginBottom: 10,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText1: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    fontWeight: '400',
    borderRadius: 10,
    backgroundColor: '#ff6633',
  },
  buttonText2: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    fontWeight: '400',
    borderRadius: 10,
    backgroundColor: '#1f7a8c',
  },
  buttonText3: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    fontWeight: '400',
    borderRadius: 10,
    backgroundColor: '#531cb3',
  },
});
