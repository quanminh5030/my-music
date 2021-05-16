import React from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground,StatusBar } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import {countryList, genreList } from '../../config/dashboardConfig';

function Dashboard({ navigation }) {

  const countries = countryList;
  const genre = genreList;

  const renderCountryList = ({ item }) =>
    <ListItem
      onPress={() => {
        navigation.navigate('SongsByCountry', {
          countryID: item.id,
          country: item.title
        })
      }}
    >
      <ImageBackground
        source={{ uri: item.imgUrl }}
        resizeMode='cover'
        imageStyle={{ borderRadius: 40 }}
        style={{ width: 150, height: 150 }}
      >

        <ListItem.Content
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>{item.title}</ListItem.Title>
        </ListItem.Content>

      </ImageBackground>

    </ListItem>


  const renderGenreList = ({ item }) =>
    <ListItem
      onPress={() => {

        navigation.navigate('SongsByGenre', {
          genreId: item.id,
          genre: item.name
        })
      }}
    >
      <ImageBackground
        source={{ uri: item.imgUrl }}
        resizeMode='cover'
        imageStyle={{ borderRadius: 40 }}
        style={{ width: 236, height: 165 }}
      >

        <ListItem.Content
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ListItem.Title style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>{item.name}</ListItem.Title>
        </ListItem.Content>

      </ImageBackground>

    </ListItem>

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar hidden />

      <Header
        containerStyle={{ height: 150 }}
        backgroundImage={require('../../assets/myImg/headerDashboard.jpg')}
        backgroundImageStyle={{ resizeMode: 'cover' }}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Today's playlist</Text>

        <FlatList
          data={genre}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          renderItem={renderGenreList}
        />

      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Top songs by country</Text>
        <FlatList
          data={countries}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          renderItem={renderCountryList}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },

  title: {
    color: '#d46e7a',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20
  }
})

export default Dashboard
