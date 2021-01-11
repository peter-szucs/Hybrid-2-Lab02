import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Cell = ({ description, image }) => {
    return (
        <View style={styles.main}>
            <Image source={image} style={{width: 80, height: 80, marginTop: 10}} />
            <Text style={textStyles.footnote}>{description}</Text>

        </View>
    )
}

export function RoomComponent({ description, image}) {
    return (
        <View style={styles.component}>
            <View>
                <Cell description={description} image={image} style={styles.cells}></Cell>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#1aa195',
        width: 110,
        height: 125,
        alignItems: 'center'
    },
    cells: {
        padding: 10
    },
    component: {
        backgroundColor: '#fff',
        padding: 10
    }
})

const textStyles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 26,
        paddingTop: 20
      },
    footnote: {
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    }
});