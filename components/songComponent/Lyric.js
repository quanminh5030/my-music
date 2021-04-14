import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, ScrollView } from 'react-native';
import { Tile, Header, Icon, ListItem, Text } from 'react-native-elements';
import FetchServices from '../services/FetchServices';

const Lyric = ({ authorName, songName }) => {
    const [lyric, setLyric] = useState('');

    useEffect(() => {
        FetchServices
            .getLyrics(songName, authorName)
            .then(data => setLyric(data.lyrics))
            .catch(err => console.error(err))
    }, []);

    console.log(typeof (lyric))

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{flex: 1, alignItems: 'center' }}>
                <Text h1>{`"${songName}"`}</Text>
                <Text h4>by</Text>
                <Text h3>{authorName}</Text>
            </View>

            <ScrollView style={{flex: 1}}>
                <Text>{lyric}</Text>
            </ScrollView>
        </View>
    )
}

export default Lyric
