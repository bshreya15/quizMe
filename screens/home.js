import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://qphs.fs.quoracdn.net/main-qimg-a8fae133dccfc5375e4e5e210347a28d-lq',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  banner: {
    height: 300,
    width: 300,
  },
  button: {
    width: '80%',
    backgroundColor: '#cc92c2',
    marginBottom: 100,
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '500',
  },
});
