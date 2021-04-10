import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Tile, Header, Icon, ListItem, Text } from 'react-native-elements';
import FetchServices from '../services/FetchServices';
import { StatusBar } from 'expo-status-bar';

const Album = ({ authorName }) => {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        FetchServices.getAlbums(authorName)
            .then(data => setAlbum(data))
            .catch(err => console.error(err));
    }, []);

    const renderAlbum = ({ item }) =>
        <ListItem
            topDivider
            bottomDivider
            onPress={() => console.log(item.title, item.artist.name)}
        >
            <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.artist.name}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>


    return (
        <View>
            <StatusBar hidden />
            {album.length === 0 ?
                <Tile
                    imageSrc={require('../../assets/sorry.jpg')}
                    title={`There are no songs available for the author ${authorName}. Please check the name again!`}
                />
                :
                <>
                    <Header
                        centerComponent={{
                            text: `${authorName}'S ALBUMS`,
                            style: styles.title
                        }}
                        leftComponent={<Icon name='album' color='white' />}
                        backgroundColor='black'
                    />


                    <FlatList
                        style={{ margin: 10 }}
                        data={album}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderAlbum}
                    />
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18, 
        color: 'white'
    }
})

export default Album
