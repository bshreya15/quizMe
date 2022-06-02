import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://qphs.fs.quoracdn.net/main-qimg-a8fae133dccfc5375e4e5e210347a28d-lq',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>HOME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 300,
    width: 300,
  },
});
