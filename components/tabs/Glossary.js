import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Glossary() {
    return (
        <View style={styles.container}>
            <Text>This is glossary page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#c7c7c7',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

export default Glossary
