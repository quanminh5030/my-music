import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
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
        >
            <Icon name='album' />
            <ListItem.Content>
                <ListItem.Title>{item.album.album_name}</ListItem.Title>
                <ListItem.Subtitle>
                    {
                        item.album.primary_genres.music_genre_list[0]
                            ? item.album.primary_genres.music_genre_list[0].music_genre.music_genre_name
                            : 'updating...'
                    }
                </ListItem.Subtitle>
            </ListItem.Content>
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
        <View>
            <StatusBar hidden />
            {albums.length === 0 ?
                <Tile
                    imageSrc={require('../../assets/sorry.jpg')}
                    title={`There are no albums available for the artist "${artistName}". Please check the name again!`}
                />
                :
                <>
                    <Header
                        placement='left'
                        centerComponent={{
                            text: `${artistName.toUpperCase()}'S ALBUMS`,
                            style: styles.title

                        }}

                        rightComponent={
                            <View>
                                <Text h4 style={{ color: 'white', marginBottom: 8 }}>
                                    Rating: {artist.artist_rating}
                                </Text>
                                <AntDesign
                                    name='twitter'
                                    color='white'
                                    style={{ fontSize: 20, marginRight: 30 }}
                                    onPress={openTwitter}
                                />
                            </View>
                        }
                        backgroundColor='black'
                    />

                    <FlatList
                        style={{ margin: 10 }}
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
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
})

export default Album
