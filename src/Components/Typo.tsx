import { View, Text, TextProps, TextStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

type TextSizesProps = {
  [key: string]: {
    fontSize: TextStyle['fontSize'];
    lineHeight: TextStyle['lineHeight'];
  };
};

const TextSizes: TextSizesProps = {
  xs: {
    fontSize: 12,
    lineHeight: 16,
  },
  sm: {
    fontSize: 14,
    lineHeight: 20,
  },
  base: {
    fontSize: 16,
    lineHeight: 24,
  },
  lg: {
    fontSize: 18,
    lineHeight: 28,
  },
  xl: {
    fontSize: 20,
    lineHeight: 28,
  },
  xl2: {
    fontSize: 24,
    lineHeight: 32,
  },
  xl3: {
    fontSize: 30,
    lineHeight: 36,
  },
  xl4: {
    fontSize: 36,
    lineHeight: 40,
  },
  xl5: {
    fontSize: 48,
    lineHeight: 48,
  },
};

type TypoProps = TextProps &
  TextStyle & {
    variant?: 'black' | 'bold' | 'semibold' | 'medium';
    size?: keyof typeof TextSizes;
  };

const Typo = ({
  children,
  variant = 'medium',
  size = 'base',
  ...other
}: TypoProps) => {
  let fontFamily: TextStyle['fontFamily'] = 'Geologica-Medium';
  const theme = useTheme();

  switch (variant) {
    case 'black':
      fontFamily = 'Geologica-Black';
      break;
    case 'bold':
      fontFamily = 'Geologica-Bold';
      break;
    case 'semibold':
      fontFamily = 'Geologica-SemiBold';
      break;
  }

  const initialTypoStyle: TextStyle = {
    ...TextSizes[size],
    color: theme.colors.text,
    fontFamily,
  };
  return (
    <Text style={[initialTypoStyle, other]} {...other}>
      {children}
    </Text>
  );
};

export default Typo;
