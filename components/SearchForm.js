import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input, Button, Overlay, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import FetchServices from './services/FetchServices';
import BgImage from '../assets/bg_image.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchForm = ({ navigation }) => {
    const [song, setSong] = useState('');
    const [artist, setArtist] = useState('');
    const [artistId, setArtistId] = useState('');

    const [visible, setVisible] = useState(false);

    const getArtistId = () => {
        FetchServices
            .getArtistId(artist.trim())
            .then(data => setArtistId(data.message.body.artist_list[0].artist.artist_id))
            .catch(err => console.error(err));
    }

    const toggleOverlay = () => {
        setVisible(!visible);
        setSong('');
        setArtist('');
    }

    return (
        <ImageBackground
            source={BgImage}
            style={styles.image}
        >
            <View style={styles.container}>
                {/* <Input
                placeholder='Name of the song'
                label='Song'
                onChangeText={name => setSong(name)}
                value={song}
                leftIcon={
                    <Icon
                        name='music'
                        size={18}
                        color='gray'
                    />
                }
            />

            <Input
                placeholder='Name of the artist'
                label='artist'
                onChangeText={name => setArtist(name)}
                value={artist}
                leftIcon={
                    <Icon
                        name='user'
                        size={18}
                        color='gray'
                    />
                }

                onEndEditing={getArtistId}
            />

            <Button
                title='Search'
                type='outline'
                iconRight
                icon={
                    <Icon
                        name='search'
                        size={15}
                        color='black'

                    />
                }
                titleStyle={{ color: 'black', marginRight: 20 }}
                buttonStyle={{ borderColor: 'black', borderWidth: 1, }}
                onPress={() => {
                    navigation.navigate('Song',
                        {
                            artistId: artistId,
                            artistName: artist,
                            songName: song.trim()
                        }
                    )
                    setArtist('');
                    setArtistId('');
                }
                }
            /> */}

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={()=> console.log('lyric')}>
                        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Search song</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, }}>
                    <TouchableOpacity style={styles.button} onPress={toggleOverlay}>
                        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Search albums</Text>
                    </TouchableOpacity>
                </View>

                <Overlay
                    overlayStyle={styles.overlay}
                    isVisible={visible}
                    onBackdropPress={toggleOverlay}
                    alignItems='center'
                >
                    <Header
                        backgroundColor='transparent'
                        centerComponent={{
                            text: 'Search song',
                            style: styles.title
                        }}
                        rightComponent={
                            <AntDesign
                                name='closecircle'
                                color='white'
                                style={{ fontSize: 20 }}
                                onPress={toggleOverlay}
                            />
                        }
                    />
                    <Input
                        placeholder='Name of the artist'
                        label='artist'
                        onChangeText={name => setArtist(name)}
                        value={artist}
                        leftIcon={
                            <Icon
                                name='user'
                                size={18}
                                color='gray'
                            />
                        }
                        inputStyle={{color: 'white'}}
                        onEndEditing={getArtistId}
                    />
                    <Button
                        title='Search'
                        type='outline'
                        iconRight
                        icon={
                            <Icon
                                name='search'
                                size={15}
                                color='white'

                            />
                        }
                        titleStyle={{ color: 'white', marginRight: 20 }}
                        containerStyle={{ alignItems: 'center' }}
                        buttonStyle={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, width: '40%' }}
                        onPress={() => {
                            navigation.navigate('Song',
                                {
                                    artistId: artistId,
                                    artistName: artist,
                                    songName: song.trim()
                                }
                            )
                            setArtist('');
                            setArtistId('');
                            setVisible(!visible)
                        }
                        }
                    />
                </Overlay>

            </View>
        </ImageBackground>
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
        width: 150,
        height: 150,
        backgroundColor: 'orange',
        borderRadius: 100,
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
