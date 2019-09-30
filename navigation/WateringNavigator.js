import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PlantsScreen from "../screens/PlantsScreen.js";

const WateringNavigator = createStackNavigator({
  Plants: PlantsScreen
});

export default createAppContainer(WateringNavigator);
