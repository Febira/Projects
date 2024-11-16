import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
    </View>
  );
};

export default Home;
