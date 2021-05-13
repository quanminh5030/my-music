import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import FetchServices from '../services/FetchServices';
// import { Helmet } from 'react-helmet';
import { StatusBar } from 'expo-status-bar';

const Lyric = ({ route, navigation }) => {
    const [lyric, setLyric] = useState('');
    const { song, artist, songId } = route.params;

    useEffect(() => {
        FetchServices
            .getLyrics(songId)
            // .then(data => setLyric(data.lyrics))
            .then(data => setLyric(data.message.body.lyrics.lyrics_body))
            .catch(err => console.error(err))
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <StatusBar hidden />
            <Avatar
                size='xlarge'
                rounded
                source={{
                    uri: 'https://image.freepik.com/free-vector/colorful-guitarist-background_23-2147619655.jpg'
                }}
                containerStyle={{ marginTop: 20 }}
            />

            <Text h3 h3Style={{ textAlign: 'center', marginTop: 20, color: '#d46e7a', fontWeight: 'bold' }}>{song}</Text>
            <Text h4 h4Style={{ color: '#d46e7a', marginTop: 10 }}>{artist}</Text>

            {lyric ?
                <ScrollView style={{ marginTop: 20, backgroundColor: '#fae1dc', borderRadius: 80, margin: 20 }}>
                    <Text style={{ textAlign: 'center', margin: 30, color: '#d46e7a', fontSize: 18 }}>
                        {lyric}
                    </Text>
                </ScrollView>
                : <ScrollView style={{ marginTop: 50, backgroundColor: '#fae1dc' }}>
                    <Text h4 h4Style={{ textAlign: 'center' }}>***</Text>
                    <Text h4>There is no lyric available for this song</Text>
                </ScrollView>
            }
        </View>

    )
}

export default Lyric
