import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchForm = ({ navigation }) => {
    const [song, setSong] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <View style={styles.container}>
            <Input
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
                placeholder='Name of the author'
                label='Author'
                onChangeText={name => setAuthor(name)}
                value={author}
                leftIcon={
                    <Icon
                        name='user'
                        size={18}
                        color='gray'
                    />
                }

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
                    setAuthor('');
                    navigation.navigate('Song',
                        {
                            authorName: author.trim().toUpperCase(),
                            songName: song.trim()
                        }
                    )
                }
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchForm
