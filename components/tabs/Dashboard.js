import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header, ListItem } from 'react-native-elements';

function Dashboard({ navigation }) {

  const countries = [
    { id: 'us', imgUrl: 'https://cdn.theculturetrip.com/wp-content/uploads/2016/03/suspension-bridge-1149942_1280-1024x715.jpg', title: 'US' },
    { id: 'fi', imgUrl: 'https://globalgrasshopper.com/wp-content/uploads/2020/03/Most-beautiful-places-to-visit-in-Finland.jpg', title: 'FINLAND' },
    { id: 'vn', imgUrl: 'https://www.travelanddestinations.com/wp-content/uploads/2019/10/Ban-Gioc-Detian-Waterfalls-Vietnam-1.jpg', title: 'VIETNAM' },
    { id: 'gb', imgUrl: 'https://www.planetware.com/photos-large/ENG/uk-best-places-loch-ness-inverness.jpg', title: 'UK' },
    { id: 'es', imgUrl: 'https://globalgrasshopper.com/wp-content/uploads/2011/06/Valencia-1-1000x643.jpg', title: 'SPAIN' },
  ];

  const genre = [
    { id: 1210, name: 'Accoustic Blues', imgUrl: 'https://www.rockandbluesmuse.com/wp-content/uploads/2019/10/adult-fashion-guitar-1543-e1570748355610.jpg' },
    { id: 1134, name: 'Soft Rock', imgUrl: 'https://p2.piqsels.com/preview/769/629/114/light-pixel-google-christmas-thumbnail.jpg' },
    { id: 1111, name: 'Latin Jazz', imgUrl: 'https://cdn-radiotime-logos.tunein.com/s290624g.png' },
    { id: 1077, name: 'Underground Rap', imgUrl: 'https://2.bp.blogspot.com/-d3ORt81kr6Q/V8A6CEdg4VI/AAAAAAAAAgs/6MqRpB89sDIAc0RqbiTHru5eZHYwKHA_ACEw/s640/large.jpg' },
    { id: 1135, name: 'Teen Pop', imgUrl: 'https://cdna.artstation.com/p/assets/images/images/023/468/228/large/leandro-raimundo-your-name-fan-poster.jpg?1579290360' },
    { id: 1120, name: 'Baladas y Boleros', imgUrl: 'https://simplylamm.files.wordpress.com/2020/10/pexels-photo-3775938.jpeg?w=1400' },
  ];

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
      <Header
        containerStyle={{ height: 150 }}
        backgroundImage={{ uri: 'https://static.vecteezy.com/ti/vecteur-libre/p3/275534-abstrait-vague-creative-elegante-rose-gratuit-vectoriel.jpg' }}
        backgroundImageStyle={{ resizeMode: 'cover' }}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Today's playlist</Text>

        <FlatList
          data={genre}
          keyExtractor={item => item.id}
          horizontal={true}
          renderItem={renderGenreList}
        />

      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Top songs by country</Text>
        <FlatList
          data={countries}
          keyExtractor={item => item.id}
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
