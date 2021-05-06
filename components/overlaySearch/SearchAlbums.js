import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button, Overlay, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';


const SearchAlbums = ({ toggleOverlayAlbums, visibleAlbums, setvisibleAlbums, song, getArtistId, navigation, artist, setArtist, setArtistId, artistId }) => {

  return (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={visibleAlbums}
      onBackdropPress={toggleOverlayAlbums}
      alignItems='center'
    >
      <Header
        backgroundColor='transparent'
        centerComponent={{
          text: 'Type an artist',
          style: styles.title
        }}
        containerStyle={{marginBottom: 50}}
        rightComponent={
          <AntDesign
            name='closecircle'
            color='white'
            style={{ fontSize: 20 }}
            onPress={toggleOverlayAlbums}
          />
        }
      />
      <Input
        containerStyle={{flex: 1}}
        placeholder='Name of the artist'
        onChangeText={name => setArtist(name)}
        value={artist}
        leftIcon={
          <Icon
            name='user'
            size={25}
            color='white'
          />
        }
        inputStyle={{ color: 'white', marginLeft: 10}}
        inputContainerStyle={{borderBottomColor: 'white', borderBottomWidth: 3, color: 'white'}}
        onEndEditing={getArtistId}
      />
      <Button
        type='solid'
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
          navigation.navigate('Song',
            {
              artistId: artistId,
              artistName: artist,
              songName: song.trim()
            }
          )
          setArtist('');
          setArtistId('');
          setvisibleAlbums(!visibleAlbums)
        }
        }
      />
    </Overlay>
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
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20
  },
})

export default SearchAlbums
