import { TextInputProps, TextInput, TouchableOpacity } from 'react-native';
import Wrapper from './Wrapper';
import Octicons from '@expo/vector-icons/Octicons';
import {
  inputButtonGap,
  inputButtonHeight,
  inputButtonIconSize,
  roundedBtn,
} from '../Constants/Sizes';
import { bgColor, textColor } from '../Constants/Colors';

type InputProps = TextInputProps & {
  leftIcon?: keyof typeof Octicons.glyphMap;
  rightIcon?: keyof typeof Octicons.glyphMap;
  onRightIconPress?: () => void;
};

export default function Input({
  leftIcon,
  rightIcon,
  onRightIconPress,
  ...other
}: InputProps) {
  const iconSize = inputButtonIconSize;
  return (
    <Wrapper
      backgroundColor={bgColor.base3}
      gap={inputButtonGap}
      flexDirection='row'
      alignItems='center'
      height={inputButtonHeight}
      paddingHorizontal={20}
      borderRadius={roundedBtn}
    >
      {leftIcon && (
        <Wrapper
          width={iconSize}
          height={iconSize}
          alignItems='center'
          justifyContent='center'
        >
          <Octicons name={leftIcon} size={iconSize} color={textColor.base} />
        </Wrapper>
      )}
      <TextInput
        placeholderTextColor={textColor.ghost}
        style={{
          flex: 1,
          fontFamily: 'Geologica-Medium',
          fontSize: 16,
          color: textColor.base,
          lineHeight: 24,
        }}
        {...other}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <Wrapper
            width={iconSize}
            height={iconSize}
            alignItems='center'
            justifyContent='center'
          >
            <Octicons name={rightIcon} size={iconSize} color={textColor.base} />
          </Wrapper>
        </TouchableOpacity>
      )}
    </Wrapper>
  );
}
