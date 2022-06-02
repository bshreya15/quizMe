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
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {paddingTop: 40, paddingHorizontal: 20, backgroundColor: 'white'},
  bannerContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 300,
    width: 300,
  },
  button:{
    width:'100%',
    backgroundColor:'#cc92c2',
    marginTop:50,
    padding:10,
    borderRadius:16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color:'#fff',
    borderRadius:16,
    fontSize: 26,
    fontWeight: '1400',
  }
});
