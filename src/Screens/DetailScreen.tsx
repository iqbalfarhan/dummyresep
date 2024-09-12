import { ScrollView, Image, RefreshControl } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { DefaultTheme, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import Wrapper from '../Components/Wrapper';
import Typo from '../Components/Typo';
import { ResepType } from '../DataTypes/ResepType';
import UnorderList from '../Components/UnorderList';
import { containerGap, containerPadding, roundedBox } from '../Constants/Sizes';
import { StatusBar } from 'expo-status-bar';
import { supabase } from '../Utils/Supabase';
import ParallaxScrollView from '../Components/ParallaxScrollView';
import { bgColor } from '../Constants/Colors';

const DetailScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const { id } = params;

  const [loading, setLoading] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<ResepType | null>(null);

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  async function getRecipe(id: number) {
    setLoading(true);
    const { data } = await supabase.from('recipes').select().eq('id', id);
    setRecipe(data ? (data[0] as ResepType) : null);
    setLoading(false);
  }

  return (
    <ParallaxScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={() => getRecipe(id)} />
      }
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={{ uri: recipe?.image }}
          style={{
            bottom: 0,
            left: 0,
            position: 'absolute',
            width: '100%',
            aspectRatio: 1,
          }}
        />
      }
    >
      {recipe && (
        <Wrapper
          backgroundColor={DefaultTheme.colors.background}
          borderTopEndRadius={roundedBox}
          borderTopStartRadius={roundedBox}
        >
          <Wrapper padding={containerPadding} gap={containerGap}>
            <Wrapper paddingVertical={20}>
              <Typo size={'xl4'} variant='bold' flex={1}>
                {recipe.name}
              </Typo>
              <Wrapper flexDirection='row' flexWrap='wrap' gap={5} flex={1}>
                <Typo opacity={0.5} size={'xs'}>
                  {[
                    ...recipe.tags,
                    ...recipe.mealType,
                    recipe.cuisine,
                    recipe.difficulty,
                  ].map((item, index) => (
                    <Fragment key={index}>{`#${item}, `}</Fragment>
                  ))}
                </Typo>
              </Wrapper>
            </Wrapper>

            <UnorderList label='Ingredients' lists={recipe.ingredients} />
            <UnorderList label='Instruction' lists={recipe.instructions} />
          </Wrapper>
        </Wrapper>
      )}
      <StatusBar
        style={'dark'}
        backgroundColor={DefaultTheme.colors.card}
        translucent={false}
      />
    </ParallaxScrollView>
  );
};

export default DetailScreen;
