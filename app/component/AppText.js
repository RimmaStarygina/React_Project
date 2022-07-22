import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/style";

// if any additional components will be passed to AppText function it won't be applied without "rest" operator
function AppText({ children, style, ...otherProps }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
