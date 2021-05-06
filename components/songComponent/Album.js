import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Linking, StyleSheet, View } from 'react-native';
import { Tile, Header, Icon, ListItem, Text } from 'react-native-elements';
import FetchServices from '../services/FetchServices';
import { StatusBar } from 'expo-status-bar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Track from './Track';

const Album = ({ artistId, artistName }) => {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [artist, setArtist] = useState({});
  const [visible, setVisible] = useState(false);

  const getArtist = () => {
    FetchServices.getArtistInfo(artistName)
      .then(data => setArtist(data.message.body.artist_list[0].artist))
      .catch(err => console.error(err))
  }

  const getAlbums = () => {
    FetchServices.getAlbums(artistId)
      .then(data => setAlbums(data.message.body.album_list))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getAlbums();
    getArtist();
  }, []);

  const showTracks = albumId => {
    console.log(albumId)
    FetchServices.getTracks(albumId)
      .then(data => setTracks(data.message.body.track_list))
      .catch(err => console.error(err));
    setVisible(!visible);
  }

  const openTwitter = () => {
    let twitterUrl = artist.artist_twitter_url;

    twitterUrl ?
      Linking.canOpenURL(twitterUrl)
        .then(supported => supported
          ? Linking.openURL(twitterUrl)
          : console.log("Don't know how to open URI: " + twitterUrl)
        )
      : Alert.alert('There is no twitter link available for this artist')
  }

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  const renderAlbum = ({ item }) =>
    <ListItem
      topDivider
      bottomDivider
      onPress={() => showTracks(item.album.album_id)}

      style={{
        marginTop: 15,
      }}

      containerStyle={{
        backgroundColor: '#fae1dc',
        borderRadius: 15,
      }}
    >
      <Icon name='album' size={22} color='#d46e7a' />
      <ListItem.Content>
        <ListItem.Title style={{ color: '#d46e7a', fontWeight: 'bold' }}>{item.album.album_name}</ListItem.Title>
        <ListItem.Subtitle style={{ color: '#d46e7a' }}>
          {
            item.album.primary_genres.music_genre_list[0]
              ? item.album.primary_genres.music_genre_list[0].music_genre.music_genre_name
              : 'updating...'
          }
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron name='caret-forward-circle-outline' size={40} color='#b8515d' />
    </ListItem>

  const renderTrack = ({ item }) =>
    <ListItem
      topDivider
      bottomDivider
      onPress={() => console.log(item.track.track_id)}
      containerStyle={{ backgroundColor: '#000000a0' }}
    >
      <MaterialIcons
        name='audiotrack'
        style={{ fontSize: 25, color: 'white' }} />
      <ListItem.Content>
        <ListItem.Title style={{ color: 'white' }}>{item.track.track_name}</ListItem.Title>
        <ListItem.Subtitle style={{ color: 'white' }}>
          {
            item.track.primary_genres.music_genre_list[0]
              ? item.track.primary_genres.music_genre_list[0].music_genre.music_genre_name
              : 'updating...'
          }
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>

  return (
    <View style={{ backgroundColor: 'white' }}>
      <StatusBar hidden />
      {albums.length === 0 ?
        <Tile
          imageSrc={require('../../assets/sorry.jpg')}
          title={`There are no albums available for the artist "${artistName}". Please check the name again!`}
        />
        :
        <>
          <Header
            backgroundColor='pink'
            containerStyle={{ height: 100 }}
            centerContainerStyle={{ justifyContent: 'center', alignItems: 'flex-start' }}
            centerComponent={{
              text: `${artistName.toUpperCase()}'S ALBUMS`,
              style: styles.title

            }}

            rightComponent={
              <AntDesign
                name='twitter'
                color='white'
                style={{ fontSize: 25, marginRight: 20 }}
                onPress={openTwitter}
              />}

          />

          <FlatList
            style={{ margin: 20 }}
            data={albums}
            keyExtractor={(item) => item.album.album_id.toString()}
            renderItem={renderAlbum}
          />

          <Track
            visible={visible}
            toggleOverlay={toggleOverlay}
            tracks={tracks}
            renderTrack={renderTrack}
          />
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
})

export default Album
