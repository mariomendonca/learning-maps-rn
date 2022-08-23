import { createDrawerNavigator } from "@react-navigation/drawer"
import { Home } from "../screens/Home"
import { NewMarkers } from "../screens/NewMarkers"
import { PolygonCreate } from "../screens/PolygonCreate"
import { Url } from "../screens/Url"

export function Drawer() {
  const { Navigator, Screen } = createDrawerNavigator()

  return (
    <Navigator>
      <Screen name="Url" component={Url} />
      <Screen name="Home" component={Home} />
      <Screen name="NewMarkers" component={NewMarkers} />
      <Screen name="PolygonCreate" component={PolygonCreate} />
    </Navigator>
  )
}