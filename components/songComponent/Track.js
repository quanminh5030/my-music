import React from 'react'
import BgImage from '../../assets/bg_image.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FlatList, ImageBackground, StyleSheet } from 'react-native';
import { Header, Overlay } from 'react-native-elements';

const Track = ({ visible, toggleOverlay, tracks, renderTrack }) => {

    return (
        <Overlay
            overlayStyle={styles.overlay}
            isVisible={visible}
            onBackdropPress={toggleOverlay}
        >
            <ImageBackground
                source={BgImage}
                style={styles.image}
            >
                <Header
                    backgroundColor='transparent'
                    centerComponent={{
                        text: 'Track List',
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
                <FlatList
                    style={{ margin: 10 }}
                    data={tracks}
                    keyExtractor={(item) => item.track.track_id.toString()}
                    renderItem={renderTrack}
                />
            </ImageBackground>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },

    overlay: {
        width: '90%',
        height: '70%',
        backgroundColor: 'black'
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
    }
})

export default Track
