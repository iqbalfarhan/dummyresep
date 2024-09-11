import React from 'react';
import { ResepType } from '../DataTypes/ResepType';
import Wrapper from './Wrapper';
import Typo from './Typo';
import { Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

type RecipeCardProps = {
  data: ResepType;
};

const RecipeCard = ({ data }: RecipeCardProps) => {
  const theme = useTheme();
  return (
    <Wrapper
      flexDirection='row'
      gap={15}
      padding={15}
      backgroundColor={theme.colors.card}
      borderRadius={15}
      alignItems='center'
    >
      <Image
        source={{ uri: data.image }}
        style={{ height: 50, width: 50, borderRadius: 10 }}
      />
      <Wrapper>
        <Typo>{data.name}</Typo>
        <Typo size={'sm'} opacity={0.5} numberOfLines={1}>
          {[
            data.difficulty,
            data.mealType[0],
            `${data.cookTimeMinutes} menit`,
          ].join(' • ')}
        </Typo>
      </Wrapper>
    </Wrapper>
  );
};

export default RecipeCard;
