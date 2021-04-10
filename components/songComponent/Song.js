import React from 'react';
import Album from './Album';
import Lyric from './Lyric';

const Song = ({ route }) => {
    const { authorName, songName } = route.params;

    if (!songName) {
        return (
            <Album authorName={authorName} />
        )
    } else {
        return (
            <Lyric authorName={authorName} songName={songName} />
        )
    }
}

export default Song
