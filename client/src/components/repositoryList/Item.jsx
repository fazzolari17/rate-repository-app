import { View, Image } from 'react-native';
import Text from '../Text';
import SmallItem from './SmallItem';
import styles from './styles';

const Item = ({ data }) => {
  const { fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl } = data.item;

  return (
    <>
      <View testID='repositoryItem' style={styles.flexContainer}>
        <View style={[styles.flexContainer, styles.container]}>
          <Image style={styles.logo} source={{ uri: ownerAvatarUrl }} resizeMode={'cover'} testID='avatarImage' />
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

export default Item;