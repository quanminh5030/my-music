import React, { useEffect, useState } from 'react'
import { FlatList, StatusBar, View } from 'react-native'
import { Header, ListItem } from 'react-native-elements';
import FetchServices from '../services/FetchServices';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SongsByGenre = ({ route, navigation }) => {

  const { genreId, genre } = route.params;
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    getSongsByGenre(genreId)
  }, [])

  const getSongsByGenre = id => {
    FetchServices.getSongsByGenre(id)
      .then(data => setSongList(data.message.body.track_list))
      .catch(err => console.log(err))
  }

  const renderSongs = ({ item }) =>
    <ListItem
      topDivider
      bottomDivider
      onPress={() => {
        navigation.navigate('Lyric', {
          songId: item.track.track_id,
          song: item.track.track_name,
          artist: item.track.artist_name,
        })
      }}
      onLongPress={() => saveSong(item)}

      style={{
        marginTop: 15,
      }}

      containerStyle={{
        backgroundColor: '#fae1dc',
        borderRadius: 15,
      }}
    >
      <FontAwesome name='music' size={22} color='#d46e7a' />
      <ListItem.Content>
        <ListItem.Title style={{ color: '#d46e7a', fontWeight: 'bold' }}>{item.track.track_name}</ListItem.Title>
        <ListItem.Subtitle style={{ color: '#d46e7a' }} >{item.track.artist_name}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron name='caret-forward-circle-outline' size={40} color='#b8515d' />
    </ListItem>

  return (
    <View style={{ backgroundColor: 'white' }}>
      <StatusBar hidden />

      <Header
        backgroundColor='pink'
        centerComponent={{ text: genre + ' song', style: { color: 'white', fontSize: 22, fontWeight: 'bold' } }}
      />

      <FlatList
        style={{ margin: 20 }}
        data={songList}
        keyExtractor={(item) => item.track.track_id.toString()}
        renderItem={renderSongs}
      />


    </View>
  )
}

export default SongsByGenre
