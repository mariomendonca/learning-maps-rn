import { Dimensions, StyleSheet, View } from "react-native"
import MapView, { UrlTile } from "react-native-maps"

export function Url() {
  const { width, height } = Dimensions.get('screen')

  return (
    <View style={styles.container}>
      <MapView
        style={{ width, height }}
        showsUserLocation
        provider='google'
      >
        <UrlTile
          urlTemplate={"http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
      </MapView>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
