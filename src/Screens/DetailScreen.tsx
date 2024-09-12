import { ScrollView, Image, RefreshControl } from 'react-native';
import React, { Fragment } from 'react';
import { DefaultTheme, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import Wrapper from '../Components/Wrapper';
import Typo from '../Components/Typo';
import { ResepType } from '../DataTypes/ResepType';
import UnorderList from '../Components/UnorderList';
import useFetch from '../Hooks/useFetch';
import { containerGap, containerPadding } from '../Constants/Sizes';
import { StatusBar } from 'expo-status-bar';

const DetailScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const { id } = params;

  const {
    data: resep,
    isLoading,
    refetch,
  } = useFetch<ResepType>(`/recipe/${id}`);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
    >
      {resep && (
        <Wrapper>
          <Image
            source={{ uri: resep?.image }}
            style={{
              width: '100%',
              aspectRatio: 1,
            }}
          />
          <Wrapper padding={containerPadding} gap={containerGap}>
            <Wrapper paddingVertical={20}>
              <Typo size={'xl4'} variant='bold' flex={1}>
                {resep.name}
              </Typo>
              <Wrapper flexDirection='row' flexWrap='wrap' gap={5} flex={1}>
                <Typo opacity={0.5} size={'xs'}>
                  {[
                    ...resep.tags,
                    ...resep.mealType,
                    resep.cuisine,
                    resep.difficulty,
                  ].map((item, index) => (
                    <Fragment key={index}>{`#${item}, `}</Fragment>
                  ))}
                </Typo>
              </Wrapper>
            </Wrapper>

            <UnorderList label='Ingredients' lists={resep.ingredients} />
            <UnorderList label='Instruction' lists={resep.instructions} />
          </Wrapper>
        </Wrapper>
      )}
      <StatusBar
        style={'dark'}
        backgroundColor={DefaultTheme.colors.card}
        translucent={false}
      />
    </ScrollView>
  );
};

export default DetailScreen;
