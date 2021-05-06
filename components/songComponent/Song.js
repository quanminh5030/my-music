import React from 'react';
import Album from './Album';
import SongList from './SongList';

const Song = ({ route, navigation }) => {
    const { artistId, artistName, songName, songId } = route.params;

    if (!songName) {
        return (
            <Album
                artistId={artistId}
                artistName={artistName}
            />
        )
    } else {
        return (
            <SongList
                songId={songId}
                navigation={navigation}
                songName={songName}
                artistName={artistName}
            />
        )
    }

}

export default Song
