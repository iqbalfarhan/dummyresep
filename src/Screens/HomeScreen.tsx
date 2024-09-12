import {
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
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
import { containerGap, containerPadding } from '../Constants/Sizes';

const HomeScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Detail'>>();

  const { isLoading, data, error, refetch } = useFetch<{
    recipes: ResepType[];
  }>('/recipes');

  const [checked, setChecked] = useState<string>('');
  const [cari, setCari] = useState<string>('');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
    >
      <Wrapper padding={containerPadding} gap={containerGap}>
        <Wrapper paddingVertical={40} gap={0}>
          <Typo size={'base'} opacity={0.5}>
            Selamat datang
          </Typo>
          <Typo size={'xl4'} variant='bold'>
            Mau masak apa hari ini?
          </Typo>
        </Wrapper>
        <Wrapper gap={20}>
          <Input
            rightIcon='search'
            placeholder='Cari resep favorit anda'
            value={cari}
            onChangeText={(text) => setCari(text)}
          />
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <FlatList
          contentContainerStyle={{
            gap: 5,
            paddingHorizontal: containerPadding,
          }}
          horizontal
          data={['', 'Beverage', 'Snacks', 'Dinner', 'Lunch', 'Breakfast']}
          style={{ gap: 10 }}
          renderItem={(tag) => (
            <TouchableOpacity onPress={() => setChecked(tag.item)}>
              <Badge
                checked={checked === tag.item}
                label={tag.item !== '' ? tag.item : 'Semua'}
              />
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </Wrapper>
      <Wrapper padding={containerPadding} gap={containerGap}>
        <Wrapper gap={8}>
          {error && <Text>Error: {error}</Text>}

          {data &&
            data.recipes
              .filter((resep) =>
                checked !== '' ? resep.mealType.includes(checked) : true,
              )
              .filter((resep) =>
                cari !== '' ? resep.name.includes(cari) : true,
              )
              .map((item: ResepType) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => navigate('Detail', { id: item.id })}
                >
                  <RecipeCard data={item} />
                </TouchableOpacity>
              ))}
        </Wrapper>
      </Wrapper>
    </ScrollView>
  );
};

export default HomeScreen;
