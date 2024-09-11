import { View, Text, ViewStyle, ViewProps } from 'react-native';
import React from 'react';

type WrapperProps = ViewProps & ViewStyle & {};

const Wrapper = ({ children, ...other }: WrapperProps) => {
  return (
    <View style={[other]} {...other}>
      {children}
    </View>
  );
};

export default Wrapper;
