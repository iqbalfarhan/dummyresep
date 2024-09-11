import {
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';
import React from 'react';
import Wrapper from '../Components/Wrapper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { ResepType } from '../DataTypes/ResepType';
import useFetch from '../Hooks/useFetch';
import RecipeCard from '../Components/RecipeCard';
import Input from '../Components/Input';
import Badge from '../Components/Badge';
import Typo from '../Components/Typo';

const HomeScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Detail'>>();

  const { isLoading, data, error, refetch } = useFetch<{
    recipes: ResepType[];
  }>('/recipes');

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
    >
      <Wrapper padding={20} paddingVertical={40} gap={0}>
        <Typo size={'base'} opacity={0.5}>
          Welcome gang
        </Typo>
        <Typo size={'xl4'} variant='bold'>
          Create your own recipes
        </Typo>
      </Wrapper>
      <Wrapper padding={20} gap={20}>
        <Input rightIcon='search' placeholder='Cari resep favorit anda' />
      </Wrapper>
      <Wrapper>
        <FlatList
          contentContainerStyle={{ gap: 5, paddingHorizontal: 20 }}
          horizontal
          data={['foods', 'drinks', 'snack', 'dinner', 'lunch', 'breakfast']}
          style={{ gap: 10 }}
          renderItem={(tag) => <Badge label={tag.item} />}
          showsHorizontalScrollIndicator={false}
        />
      </Wrapper>
      <Wrapper padding={20} gap={5}>
        {error && <Text>Error: {error}</Text>}

        {data &&
          data.recipes.map((item: ResepType) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigate('Detail', { id: item.id })}
            >
              <RecipeCard data={item} />
            </TouchableOpacity>
          ))}
      </Wrapper>
    </ScrollView>
  );
};

export default HomeScreen;