import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import { StatusBar } from 'expo-status-bar';
import { Header, ListItem } from 'react-native-elements';
import { Text } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyBUkEJdwGHyjU5_2DFVaesHkQzUDNHnc1w",
  authDomain: "mymusic-c0882.firebaseapp.com",
  databaseURL: "https://mymusic-c0882-default-rtdb.firebaseio.com",
  projectId: "mymusic-c0882",
  storageBucket: "mymusic-c0882.appspot.com",
  messagingSenderId: "613797255615",
  appId: "1:613797255615:web:e2e093c71441ff34d7e90a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

function FavoriteList({ navigation }) {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    firebase.database().ref('tracks').on('value', snapshot => {
      if (snapshot.val()) {
        const data = snapshot.val();
        const songs = Object.values(data);
        setFavoriteList(songs);
      } else {
        console.log('no favorite song')
      }
    })
  }, []);


  const removeSong = song => {

    Alert.alert(
      '',
      `Delete the song ${song.song}?`,
      [
        {
          text: 'Yes',
          onPress: () => firebase.database().ref('tracks').on('value', snapshot => {
            const data = snapshot.val();
            const keys = Object.keys(data)

            keys.map(item => {
              if (data[item].artist === song.artist && data[item].song === song.song) {
                firebase.database().ref('tracks/' + item).remove();
              } else {
                return;
              }
            })

          }),
          style: 'destructive'
        },
        {
          text: 'No',
          style: 'cancel'
        }
      ]
    )
  }

  const renderList = ({ item }) =>
    <ListItem
      onPress={() => {
        navigation.navigate('Lyric', {
          song: item.song,
          artist: item.artist,
          songId: item.songId
        })
      }}

      style={{
        marginTop: 15,
      }}

      containerStyle={{
        backgroundColor: '#fae1dc',
        borderRadius: 15,
      }}
    >
      <ListItem.Content>
        <ListItem.Title style={{ color: '#d46e7a', fontWeight: 'bold' }}>{item.song}</ListItem.Title>
        <ListItem.Subtitle style={{ color: '#d46e7a' }}>{item.artist}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron
        name='trash' size={25} color='#b8515d'
        onPress={() => removeSong(item)}
      />
    </ListItem>




  return (
    <View>
      <StatusBar hidden />

      <Header
        backgroundColor='pink'
        containerStyle={{ height: 100, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, }}
        centerComponent={{ text: 'Favorite Songs', style: { color: 'white', fontSize: 30, fontWeight: 'bold' } }}
      />

      {favoriteList.length > 0
        ? <FlatList
          style={{ margin: 20, }}
          data={favoriteList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderList}
        />
        : <View>
          <Text>Loading...</Text>
        </View>}
    </View>
  )

}
export default FavoriteList
