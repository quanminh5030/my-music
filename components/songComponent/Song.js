import React from 'react';
import { Text } from 'react-native';
import Album from './Album';
import Lyric from './Lyric';

const Song = ({ route }) => {
    const { artistId, artistName, songName } = route.params;

    if (!songName) {
        return (
            <Album
                artistId={artistId}
                artistName={artistName}
            />
        )
    } else {
        return (
            <Lyric />
        )
    }

}

export default Song
