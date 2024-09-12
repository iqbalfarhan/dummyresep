import React from 'react';
import Typo from './Typo';
import Wrapper from './Wrapper';
import { Octicons } from '@expo/vector-icons';
import { bgColor, textColor } from '../Constants/Colors';
import { roundedBadge } from '../Constants/Sizes';

export type BadgeProps = {
  label: string;
  variant?: keyof typeof bgColor;
  icon?: keyof typeof Octicons.glyphMap;
  checked?: boolean;
};

export default function Badge({
  label,
  variant = 'primary',
  icon,
  checked,
}: BadgeProps) {
  return (
    <Wrapper
      opacity={checked ? 1 : 0.5}
      padding={3}
      paddingHorizontal={10}
      backgroundColor={bgColor[variant]}
      borderRadius={roundedBadge}
      flexDirection='row'
      alignItems='center'
      gap={6}
    >
      {icon && <Octicons name={icon} size={14} color={textColor[variant]} />}
      <Typo size={'sm'} variant='bold' color={textColor[variant]}>
        {label}
      </Typo>
    </Wrapper>
  );
}
