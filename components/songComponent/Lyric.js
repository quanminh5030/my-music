import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Tile, Header, Icon, ListItem, Text } from 'react-native-elements';

const Lyric = ({authorName, songName}) => {
    console.log(authorName, songName)
 
    return (
        <View>
            <Text>Hello World {authorName} {songName}</Text>
        </View>
    )
}

export default Lyric
