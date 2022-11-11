import { FlatList, View, StyleSheet, Image } from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import SmallItem from './SmallItem';
import { Platform } from 'react-native';
import { useState, useEffect } from 'react';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 30,
    backgroundColor: '#e1e4e8'
  },
  container: {
    padding: 25,
    flexDirection: 'row'
  },
  languageContainer: {
    backgroundColor: theme.colors.languageContainerBackground,
    padding: 15,
    alignSelf: 'flex-start',
    borderRadius: 10
  },
  item: {
    display: 'flex',
    margin: 20
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 7.5,
    marginRight: 25
  },
  flexContainer: {
    display: 'flex'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  marginBottom: {
    marginBottom: 10
  }
});


const Item = ({ data }) => {
  const { fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl } = data.item;

  return (
    <>
      <View style={styles.flexContainer}>
        <View style={[styles.flexContainer, styles.container]}>
          <Image style={styles.logo} source={{ uri: ownerAvatarUrl }} resizeMode={'cover'} />
          <View>
            <Text fontWeight={'bold'} fontSize={'heading'} style={styles.marginBottom}>
              {fullName}
            </Text>
            <Text fontSize={'heading'} color={'grayText'} style={styles.marginBottom}>
              {description}
            </Text>

            <View style={styles.languageContainer}>
              <Text style={styles.marginBottom} color={'whiteText'} fontWeight={'bold'} fontSize={'heading'}>
                {language}
              </Text>
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
  const { repositories, refetch } = useRepositories();

  if (!repositories) {
    refetch();
  }

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []; 

  const renderItem = ({ item }) => (
    <Item data={{ item }} />
  );
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;
