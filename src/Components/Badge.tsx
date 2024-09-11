import React from 'react';
import Typo from './Typo';
import Wrapper from './Wrapper';
import { Octicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

export type BadgeProps = {
  label: string;
  icon?: keyof typeof Octicons.glyphMap;
};

export default function Badge({ label, icon }: BadgeProps) {
  const theme = useTheme();
  return (
    <Wrapper
      height={32}
      paddingHorizontal={15}
      flexDirection='row'
      alignItems='center'
      backgroundColor={theme.colors.primary}
      gap={6}
      borderRadius={20}
    >
      {icon && <Octicons name={icon} size={14} />}
      <Typo size={'sm'} color={'black'}>
        {label}
      </Typo>
    </Wrapper>
  );
}
