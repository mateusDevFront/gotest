import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";

export type StackPramsList = {
  Home: undefined
};

const AppStack = createNativeStackNavigator<StackPramsList>();

export function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </AppStack.Navigator>
  );
}
