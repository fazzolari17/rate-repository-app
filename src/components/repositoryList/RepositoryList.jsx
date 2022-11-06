import { FlatList, View, StyleSheet, Image } from 'react-native';
import Text from '../Text';
import SmallItem from './SmallItem';


const styles = StyleSheet.create({
  separator: {
    height: 30,
    backgroundColor: '#e1e4e8',
  },
  container: {
    padding: 25,
    flexDirection: 'row',
  },
  languageContainer: {
    backgroundColor: '#0366d6',
    padding: 15,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  item: {
    display: 'flex',
    margin: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 7.5,
    marginRight: 25,
  },
  flexContainer: {
    display: 'flex',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  marginBottom: {
    marginBottom: 10,
  },
});

export const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const Item = ({ data }) => {
  const { 
    fullName, 
    description, 
    language, 
    stargazersCount, 
    forksCount, 
    reviewCount, 
    ratingAverage, 
    ownerAvatarUrl,
  } = data.item;

  return (
    <>
    <View style={styles.flexContainer}>
      <View style={[styles.flexContainer, styles.container]}>
        <Image
          style={styles.logo}
          source={{ uri: ownerAvatarUrl }}
          resizeMode={'cover'}
        />
        <View>
          <Text fontWeight={'bold'} fontSize={'heading'} 
          style={styles.marginBottom}
          >{fullName}
          </Text>
          <Text fontSize={'heading'} color={'grayText'} style={styles.marginBottom}>{description}</Text>

          <View style={styles.languageContainer}>
            <Text style={styles.marginBottom} color={'whiteText'} fontWeight='bold' fontSize={'heading'}>{language}</Text>
          </View>

        </View>
      </View>
      <View style={[styles.flexContainer, styles.flexRow]}>
        <SmallItem value={stargazersCount} label={'Stars'} />
        <SmallItem value={forksCount} label={'Forks'} />
        <SmallItem value={reviewCount} label={'Reviews'} />
        <SmallItem value={ratingAverage} label={'Ratings'} />
        <View style={styles.separator}></View>
      </View>
    </View>
    </>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const renderItem = ({ item }) => (
    <Item data={{ item }} /> // title={item.id} />
  );
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      // keyExtractor={item => item.id}
      // other props
    />
  );
};

export default RepositoryList;