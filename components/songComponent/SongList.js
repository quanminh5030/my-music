import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as  firebase from 'firebase';
import { Alert } from 'react-native';

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

const SongList = ({ songId, navigation }) => {

    useEffect(() => navigation.setOptions({ title: 'Back' }))

    const saveSong = item => {
        Alert.alert(
            '',
            'ADD SONG TO FAVORLITE LIST?',
            [
                {
                    text: 'OK',
                    onPress: () => firebase.database().ref('tracks').push(
                        {
                            'song': item.track.track_name,
                            'artist': item.track.artist_name
                        }
                    ),
                    style: 'destructive'
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                }
            ]
        )


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
                centerComponent={{ text: 'Song List', style: { color: 'white', fontSize: 30, fontWeight: 'bold' } }}
            />

            <FlatList
                style={{ margin: 20 }}
                data={songId}
                keyExtractor={(item) => item.track.track_id.toString()}
                renderItem={renderSongs}
            />
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

export default SongList
