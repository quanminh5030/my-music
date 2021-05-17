import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button, Overlay, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchLyric = ({ toggleOverlayLyric, visibleLyric, setVisibleLyric, setSong, song, getSongId, navigation, songId, artist, setArtist, setArtistId }) => {

  return (
    <>
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={visibleLyric}
        onBackdropPress={toggleOverlayLyric}
        alignItems='center'
      >
        <Header
          backgroundColor='transparent'
          centerComponent={{
            text: 'Type a song',
            style: styles.title
          }}
          containerStyle={{marginBottom: 50}}
          rightComponent={
            <AntDesign
              name='closecircle'
              color='white'
              style={{ fontSize: 20 }}
              onPress={toggleOverlayLyric}
            />
          }
        />
        <Input
          containerStyle={{ flex: 1 }}
          placeholder='Name of the song'
          onChangeText={name => setSong(name)}
          value={song}
          leftIcon={
            <Icon
              name='headphones'
              size={25}
              color='white'
            />
          }
          inputStyle={{ color: 'white', marginLeft: 10 }}
          inputContainerStyle={{ borderBottomColor: 'white', borderBottomWidth: 3, color: 'white' }}
          onEndEditing={getSongId}
        />
        <Button
          type='outline'
          iconRight
          icon={
            <Icon
              name='search'
              size={35}
              color='#FF94A1'
            />
          }
          containerStyle={{ alignItems: 'center', flex: 1 }}
          buttonStyle={{ borderRadius: '50%', backgroundColor: 'white' }}
          onPress={() => {
            navigation.setOptions({ title: 'Back' })
            navigation.navigate('Song',
              {
                songId: songId,
                songName: song.trim(),
                // artistName: artist
              }
            )
            setArtist('');
            setArtistId('');
            setVisibleLyric(!visibleLyric)
          }
          }
        />
      </Overlay>
    </>
  )
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#FF94A1',
    width: '70%',
    height: '45%',
    borderRadius: 50,
    flex: 0.4
  },

  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20
  },
})

export default SearchLyric
