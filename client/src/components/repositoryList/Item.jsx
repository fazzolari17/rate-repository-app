import { View, Image, Pressable } from 'react-native';
import Text from '../Text';
import SmallItem from './SmallItem';
import styles from './styles';

const Item = ({ data, onClick }) => {
  const { fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl, url } = data.item;



  const handleClick = (url) => onClick(url);

  return (
    <>
      <View testID='repositoryItem' style={[styles.flexContainer, { paddingBottom: 20 }]}>
        <View style={[styles.flexContainer, styles.container]}>
          <Image style={styles.logo} source={{ uri: ownerAvatarUrl }} resizeMode={'cover'} testID='avatarImage' />
          <View>
            <Text fontWeight={'bold'} fontSize={'heading'} style={styles.marginBottom}>
              {fullName}
            </Text>
            <Text fontSize={'heading'} color={'grayText'} style={styles.description}>
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
        {data.show &&
          <View style={styles.gitHubButton}>
          <Pressable onPress={() => handleClick(url)}>
            <Text style={[styles.marginBottom, styles.gitHubButtonText]} color={'whiteText'} fontWeight={'bold'} fontSize={'heading'}>
              Open in Github
            </Text>
          </Pressable>
          </View>
        }
      </View>
    </>
  );
};

export default Item;