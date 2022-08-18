import { useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Circle, Marker, Polygon, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';


export function Home() {
  const { width, height } = Dimensions.get('window')

  const [coords, setCoords] = useState({
    latitude: -8.04579511964922,
    longitude: -34.89268776029348
  })

  return (
    <>
      {console.log(coords)}
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ width, height }}
          initialRegion={{
            latitude: -8.0458346,
            longitude: -34.8949036,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
        // onRegionChange={(region) => console.log(region)}
        >
          <Marker
            draggable
            coordinate={coords}
            onDragEnd={(event) => setCoords(event.nativeEvent.coordinate)}
          />
          <Polygon
            coordinates={[
              {
                latitude: -8.0458346,
                longitude: -34.8949036,
              },
              {
                latitude: -8.0358346,
                longitude: -34.8849036,
              },
              {
                latitude: -8.0258346,
                longitude: -34.9049036,
              },
              {
                latitude: -8.0258346,
                longitude: -34.9149036,
              },
              {
                latitude: -8.0258346,
                longitude: -34.9249036,
              },
              {
                latitude: -8.0458346,
                longitude: -34.9249036,
              },
            ]}
            tappable
            onPress={() => Alert.alert('tapped')}
            strokeWidth={5}
            fillColor={'rgba(40,255,255,0.5)'}
            />
          <Circle
            center={{
              latitude: -8.0458346,
              longitude: -34.9549036,
            }}
            radius={1000}
            fillColor={'rgba(100,0,230,0.5)'}
          />

          <Polyline
            coordinates={[
              {
                latitude: -8.1558346,
                longitude: -34.9549036,
              },
              {
                latitude: -8.1458346,
                longitude: -34.8049036,
              },
            ]}
            strokeWidth={3}
            strokeColor={'red'}
          />
        </MapView>
      </View>
    </>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
