import { TextInputProps, TextInput, TouchableOpacity } from 'react-native';
import Wrapper from './Wrapper';
import Octicons from '@expo/vector-icons/Octicons';
import { useTheme } from '@react-navigation/native';

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
  const iconSize = 18;
  const theme = useTheme();
  return (
    <Wrapper
      gap={20}
      flexDirection='row'
      alignItems='center'
      height={48}
      paddingHorizontal={20}
      borderColor={theme.colors.text}
      borderWidth={1}
      borderRadius={16}
    >
      {leftIcon && (
        <Wrapper
          width={iconSize}
          height={iconSize}
          alignItems='center'
          justifyContent='center'
        >
          <Octicons name={leftIcon} size={iconSize} color={theme.colors.text} />
        </Wrapper>
      )}
      <TextInput
        placeholderTextColor={theme.colors.text}
        style={{
          flex: 1,
          fontFamily: 'Geologica-Medium',
          fontSize: 16,
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
            <Octicons
              name={rightIcon}
              size={iconSize}
              color={theme.colors.text}
            />
          </Wrapper>
        </TouchableOpacity>
      )}
    </Wrapper>
  );
}
