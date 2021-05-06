import React from 'react';
import { ImageBackground } from 'react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header, ListItem, Tile } from 'react-native-elements';

function Dashboard() {

  const countries = [
    { id: 'us', imgUrl: 'https://cdn.theculturetrip.com/wp-content/uploads/2016/03/suspension-bridge-1149942_1280-1024x715.jpg', title: 'US' },
    { id: 'fi', imgUrl: 'https://globalgrasshopper.com/wp-content/uploads/2020/03/Most-beautiful-places-to-visit-in-Finland.jpg', title: 'FINLAND' },
    { id: 'vn', imgUrl: 'https://www.travelanddestinations.com/wp-content/uploads/2019/10/Ban-Gioc-Detian-Waterfalls-Vietnam-1.jpg', title: 'VIETNAM' },
    { id: 'gb', imgUrl: 'https://www.planetware.com/photos-large/ENG/uk-best-places-loch-ness-inverness.jpg', title: 'UK' },
    { id: 'es', imgUrl: 'https://globalgrasshopper.com/wp-content/uploads/2011/06/Valencia-1-1000x643.jpg', title: 'SPAIN' },
  ];

  const renderCountryList = ({ item }) =>
    <ListItem
      onPress={() => console.log('Q')}
    >
      <ImageBackground
        source={{ uri: item.imgUrl }}
        resizeMode='cover'
        imageStyle={{borderRadius: 40}}
        style={{ width: 150, height: 150 }}
      >

        <ListItem.Content
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>{item.title}</ListItem.Title>
        </ListItem.Content>

      </ImageBackground>

    </ListItem>

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header
        containerStyle={{ height: 150 }}
        backgroundImage={{ uri: 'https://static.vecteezy.com/ti/vecteur-libre/p3/275534-abstrait-vague-creative-elegante-rose-gratuit-vectoriel.jpg' }}
        backgroundImageStyle={{ resizeMode: 'cover' }}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Today's playlist</Text>

      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Top songs by country</Text>
        <FlatList
          data={countries}
          keyExtractor={item => item.id}
          horizontal={true}
          renderItem={renderCountryList}
        />
      </View>

    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },

  title: {
    color: '#d46e7a',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20
  }
})

export default Dashboard
