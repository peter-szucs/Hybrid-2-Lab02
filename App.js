import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RoomComponent } from './roomcomponent'
import { DeviceComponent } from './devicescomponent'

const livingRoomImage = require("./assets/living-room.png");
const bedroomImage = require("./assets/bed.png");
const kitchenImage = require("./assets/kitchen.png");



export default function App() {
  const [deviceOne, setDeviceOne] = useState(false);
  const [deviceTwo, setDeviceTwo] = useState(false);
  const [deviceThree, setDeviceThree] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.appContainer}>
      <View style={styles.statusBar}></View>
      <View style={styles.appInfoContainer}>
        <Image style={{ width: 60, height: 60}}source={require("./assets/house.png")}></Image>
        <Text style={textStyles.appTitle}>SmartHome</Text>
      </View>
      <Text style={textStyles.title}>Rooms</Text>
      <View style={styles.roomContainer}>
        <RoomComponent description="Living Room" image={livingRoomImage}></RoomComponent>
        <RoomComponent description="Bedroom" image={bedroomImage}></RoomComponent>
        <RoomComponent description="Kitchen" image={kitchenImage}></RoomComponent>
      </View>
      <Text style={textStyles.title}>Devices</Text>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <DeviceComponent description="Living Room Lamp" state={deviceOne} updateState={setDeviceOne} counter={counter} updateCounter={setCounter}></DeviceComponent>
        <DeviceComponent description="Living Room Lamp" state={deviceTwo} updateState={setDeviceTwo} counter={counter} updateCounter={setCounter}></DeviceComponent>
        <DeviceComponent description="Heater" state={deviceThree} updateState={setDeviceThree} counter={counter} updateCounter={setCounter}></DeviceComponent>
        <Text style={textStyles.deviceCount}>Total devices On: {counter}</Text>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    //flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    height: 50,
    backgroundColor: '#fff'
  },
  appInfoContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingLeft: 20,
    alignItems: 'center'
  },
  roomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }

});

const textStyles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    paddingTop: 10,
    paddingLeft: 20
  },
  appTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 20,
    color: '#146361'
  },
  deviceCount: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
  }
});
