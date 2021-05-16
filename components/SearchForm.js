import React, {  useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FetchServices from './services/FetchServices';
import SearchLyric from './overlaySearch/SearchLyric';
import SearchAlbums from './overlaySearch/SearchAlbums';
import { Header } from 'react-native-elements';

const SearchForm = ({ navigation, route }) => {
    const [song, setSong] = useState('');
    const [songId, setSongId] = useState([]);
    const [artist, setArtist] = useState('');
    const [artistId, setArtistId] = useState('');

    const [visibleAlbums, setvisibleAlbums] = useState(false);
    const [visibleLyric, setVisibleLyric] = useState(false);

    const getArtistId = () => {
        FetchServices
            .getArtistId(artist.trim())
            .then(data => setArtistId(data.message.body.artist_list[0].artist.artist_id))
            .catch(err => console.error(err));
    }

    const getSongId = () => {
        FetchServices
            .getSongId(song.trim())
            .then(data => {
                setSongId(data.message.body.track_list)
                // setArtist(data.message.body.track_list[0].track.artist_name)
            })
            .catch(err => console.error(err))
    }

    const toggleOverlayAlbums = () => {
        setvisibleAlbums(!visibleAlbums);
        setSong('');
        setArtist('');
    }

    const toggleOverlayLyric = () => {
        setVisibleLyric(!visibleLyric);
        setSong('');
        setArtist('');
    }

    return (

        <View style={styles.container}>
            <Header
                containerStyle={{ height: 150, borderBottomLeftRadius: 80, borderBottomRightRadius: 80,}}
                backgroundColor='pink'
                centerComponent={{ text: 'Search', style: { color: 'white', fontSize: 30, fontWeight: 'bold' } }}
            />

            <View style={{ flex: 1, justifyContent: 'center', marginRight: 50, marginLeft: 50 }}>
                <TouchableOpacity style={styles.button} onPress={toggleOverlayLyric}>
                    <Text style={{ fontSize: 25, fontStyle: 'italic', color: 'white', fontWeight: 'bold' }}>Search song</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, marginRight: 50, marginLeft: 50 }}>
                <TouchableOpacity style={styles.button} onPress={toggleOverlayAlbums}>
                    <Text style={{ fontSize: 25, fontStyle: 'italic', color: 'white', fontWeight: 'bold' }}>Search albums</Text>
                </TouchableOpacity>
            </View>



            {/* for search albums */}
            <SearchAlbums
                toggleOverlayAlbums={toggleOverlayAlbums}
                visibleAlbums={visibleAlbums}
                setvisibleAlbums={setvisibleAlbums}
                song={song}
                artist={artist}
                artistId={artistId}
                getArtistId={getArtistId}
                setArtist={setArtist}
                setArtistId={setArtistId}
                navigation={navigation}
            />

            {/* for search lyric */}
            <SearchLyric
                toggleOverlayLyric={toggleOverlayLyric}
                visibleLyric={visibleLyric}
                setVisibleLyric={setVisibleLyric}
                setSong={setSong}
                song={song}
                songId={songId}
                artist={artist}
                setArtist={setArtist}
                getSongId={getSongId}
                setArtist={setArtist}
                setArtistId={setArtistId}
                navigation={navigation}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },


    button: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 251,
        height: 120,
        backgroundColor: '#FF94A1',
        borderRadius: 30
    },

    image: {
        flex: 1,
    },

    overlay: {
        width: '80%',
        height: '15%',
        backgroundColor: 'black'
    },

    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
})

export default SearchForm
