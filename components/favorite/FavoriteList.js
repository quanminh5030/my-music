import React, { useEffect, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header, ListItem, Text } from 'react-native-elements';
import { firebaseConfig } from '../../config/keysConfig';
import * as firebase from 'firebase';

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
    item ?
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

      : <View></View>

  return (
    <View>
      <StatusBar hidden />

      <Header
        backgroundColor='pink'
        containerStyle={{ height: 150, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, }}
        centerComponent={{ text: 'Favorite Songs', style: { color: 'white', fontSize: 30, fontWeight: 'bold' } }}
      />

      {favoriteList.length > 0
        ? <FlatList
          style={{ margin: 20, }}
          data={favoriteList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderList}
        />
        : <View style={{ flex: 1, alignItems: 'center' }}>
          <Text h2>Loading...</Text>
        </View>}
    </View>
  )

}
export default FavoriteList
