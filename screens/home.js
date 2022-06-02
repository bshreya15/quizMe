import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        {/* <Image source={require('../assets/banner.png')} style={styles.banner} resizeMode="contain"/> */}
        <Image
          source={{
            uri: 'https://qphs.fs.quoracdn.net/main-qimg-a8fae133dccfc5375e4e5e210347a28d-lq',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}>
        <Text>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: 'center',
    alignItems:'center',
  },
  banner: {
    height: 300,
    width: 300,
  },
});
