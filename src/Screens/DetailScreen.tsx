import { ScrollView, Image, RefreshControl } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import Wrapper from '../Components/Wrapper';
import Typo from '../Components/Typo';
import { ResepType } from '../DataTypes/ResepType';
import Badge from '../Components/Badge';
import UnorderList from '../Components/UnorderList';
import useFetch from '../Hooks/useFetch';

const DetailScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const { id } = params;

  const {
    data: resep,
    isLoading,
    refetch,
  } = useFetch<ResepType>(`/recipe/${id}`);

  if (resep === null) return null;

  return (
    <ScrollView
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
          <Wrapper padding={30} gap={30}>
            <Wrapper gap={20}>
              <Wrapper flexDirection='row' flexWrap='wrap' gap={2}>
                {[
                  ...resep.tags,
                  ...resep.mealType,
                  resep.cuisine,
                  resep.difficulty,
                ].map((item, index) => (
                  <Badge label={item} key={index} />
                ))}
              </Wrapper>
              <Typo size={'xl4'} variant='bold'>
                {resep.name}
              </Typo>
            </Wrapper>

            <UnorderList label='Ingredients' lists={resep.ingredients} />
            <UnorderList label='Instruction' lists={resep.instructions} />
          </Wrapper>
        </Wrapper>
      )}
    </ScrollView>
  );
};

export default DetailScreen;
