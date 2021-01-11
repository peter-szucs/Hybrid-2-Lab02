import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LightAndName = ({ description, stateColor }) => {
    if (stateColor) {
        return (
            <View style={styles.horizontal}>
                <View style={ [styles.onOffBox, { backgroundColor: 'green' }]}></View>
                <Text style={textStyle.deviceDescr}>{description}</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.horizontal}>
                <View style={ [styles.onOffBox, { backgroundColor: 'red' }]}></View>
                <Text style={textStyle.deviceDescr}>{description}</Text>
            </View>
        )
    }
}

const OnOffButtons = ({ state, updateState, counter, updateCounter }) => {
    return (
        <View style={styles.vertical}>
            <Button style={styles.buttons} title="On" onPress= {() => {
                updateState(true)
                if (!state) {
                    updateCounter(counter + 1)
                } 
            }} />
            <Button style={styles.buttons} title="Off" onPress= {() => {
                updateState(false)
                if (state) {
                    updateCounter(counter - 1)
                }
            }} />
        </View>
    )
}

export function DeviceComponent({ description, state, updateState, counter, updateCounter }) {
    return (
        <View style={{ paddingBottom: 20 }}>
            <View style={styles.main}>
                <View style={styles.horizontal}>
                    <LightAndName description={description} stateColor={state}></LightAndName>
                    <OnOffButtons state={state} updateState={updateState} counter={counter} updateCounter={updateCounter}></OnOffButtons>
                </View>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff0a3',
        padding: 10,
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    vertical: {
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: '#fff'
    },
    onOffBox: {
        width: 20,
        height: 20,
        backgroundColor: 'red'
    },
    buttons: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#ffffff'
    }
});

const textStyle = StyleSheet.create({
    deviceDescr: {
        fontSize: 18,
        paddingLeft: 15
    }
});