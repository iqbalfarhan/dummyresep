import React from 'react';
import { ResepType } from '../DataTypes/ResepType';
import Wrapper from './Wrapper';
import Typo from './Typo';
import { Image } from 'react-native';
import { bgColor } from '../Constants/Colors';
import { DefaultTheme } from '@react-navigation/native';
import { borderWidth } from '../Constants/Sizes';

type RecipeCardProps = {
  data: ResepType;
};

const RecipeCard = ({ data }: RecipeCardProps) => {
  return (
    <Wrapper
      flexDirection='row'
      gap={15}
      padding={15}
      backgroundColor={bgColor.base}
      borderRadius={15}
      alignItems='center'
      borderColor={DefaultTheme.colors.border}
      borderWidth={borderWidth}
    >
      <Image
        source={{ uri: data.image }}
        style={{ height: 50, width: 50, borderRadius: 10 }}
      />
      <Wrapper flex={1}>
        <Typo variant='semibold' numberOfLines={1}>
          {data.name}
        </Typo>
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
