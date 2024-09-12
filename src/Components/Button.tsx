import {
  ImageSourcePropType,
  Image,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Typo from './Typo';
import { Octicons } from '@expo/vector-icons';
import Wrapper from './Wrapper';
import { bgColor, textColor } from '../Constants/Colors';
import {
  inputButtonGap,
  inputButtonHeight,
  inputButtonIconSize,
  roundedBtn,
} from '../Constants/Sizes';

type CustomButtonProps = TouchableOpacityProps & {
  variant?: keyof typeof bgColor;
  icon?: keyof typeof Octicons.glyphMap;
  label: string;
  imgSource?: ImageSourcePropType;
};

export default function Button({
  label,
  icon,
  imgSource,
  variant = 'primary',
  ...other
}: CustomButtonProps) {
  const iconSize = inputButtonIconSize;

  return (
    <TouchableOpacity {...other}>
      <Wrapper
        height={inputButtonHeight}
        justifyContent='center'
        alignItems='center'
        gap={inputButtonGap}
        flexDirection='row'
        backgroundColor={bgColor[variant]}
        borderRadius={roundedBtn}
        opacity={other.disabled ? 0.5 : 1}
      >
        {imgSource && (
          <Image
            source={imgSource}
            style={{ width: iconSize, height: iconSize }}
          />
        )}
        {icon && (
          <Octicons name={icon} size={iconSize} color={textColor[variant]} />
        )}
        <Typo color={textColor[variant]} variant='bold'>
          {label}
        </Typo>
      </Wrapper>
    </TouchableOpacity>
  );
}
