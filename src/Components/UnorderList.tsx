import { View, Text } from 'react-native';
import React from 'react';
import Wrapper from './Wrapper';
import Typo from './Typo';
import { Octicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

type UnorderListProps = {
  label: string;
  lists: string[];
};

const UnorderList = ({ label, lists }: UnorderListProps) => {
  const theme = useTheme();
  return (
    <Wrapper gap={5}>
      <Typo variant='bold' size={'lg'}>
        {label}
      </Typo>
      <Wrapper paddingLeft={5} opacity={0.7}>
        {lists.map((item, index) => (
          <Wrapper key={index} flexDirection='row' gap={10}>
            <Wrapper padding={4}>
              <Octicons name='dot-fill' color={theme.colors.text} />
            </Wrapper>
            <Typo flex={1}>{item}</Typo>
          </Wrapper>
        ))}
      </Wrapper>
    </Wrapper>
  );
};

export default UnorderList;
