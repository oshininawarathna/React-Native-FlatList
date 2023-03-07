import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

const List = [
  {
    id: '1',
    name: 'Cat',
    image: require('./assests/cat.jpeg'),
  },
  {
    id: '2',
    name: 'Dog',
    image: require('./assests/welcome.jpg'),
  },
  {
    id: '3',
    name: 'Rabbit',
    image: require('./assests/rabbit.jpg'),
  },
  {
    id: '4',
    name: 'Lion',
    image: require('./assests/lion.jpg'),
  },
];

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView style={styles.container}>
          <View style={styles.titleView}>
            <Text
              style={{
                fontSize: 30,
                fontStyle: 'italic',
              }}>
              Animals
            </Text>
          </View>
          <View>
            <FlatList
              data={List}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.flatlistView}>
                    <Text style={styles.imageText}>{item.name}</Text>
                    <Image source={item.image} style={styles.image} />
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {backgroundColor: 'lightblue'},
  image: {
    width: 200,
    height: 200,
    marginRight: 4,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },
  imageText: {
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
    fontWeight: ' bold',
  },
  flatlistView: {
    margin: 40,
    backgroundColor: 'gray',
    padding: 20,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 50,
  },
  titleView: {
    backgroundColor: 'lightblue',
    margin: 10,
    fontWeight: ' bold',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export default Home;
