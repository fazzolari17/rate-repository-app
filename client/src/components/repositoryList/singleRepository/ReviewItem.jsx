import { View } from 'react-native';
import Text from '../../reuseableComponents/Text';
import styles from '../styles';
import format from 'date-fns/format';
import Button from '../../reuseableComponents/Button';
import theme from '../../../theme';

const ReviewItem = ({ review, showButton, handleViewRepository, handleDeleteReview }) => {
  const { id, createdAt, rating, text, user, repositoryId } = review;

  const date = format(new Date(createdAt), 'MM.dd.yyyy')

  const style = {
    buttonOne: {
      backgroundColor: theme.colors.languageContainerBackground,
    },
    buttonTwo: {
      backgroundColor: theme.colors.errorColor,
    },
    marginTop: {
      marginTop: 15,
    }
  }

  return (
    <View style={[styles.reviewContainer, {padding: 10 }]}>
  
      <View style={styles.rating}>
        <Text color={'primary'} fontWeight={'bold'}>{rating}</Text>
      </View>

      <View style={[{ width: '90%'}]}>
        <Text color={'secondary'} fontWeight={'bold'}>{user.username}</Text>
        <Text style={{ marginTop: 5 }} color={'grayText'}>{date}</Text>
        <View style={{marginTop: 10}}>
          <Text>{text}</Text>
        </View>
        {showButton && <View style={[styles.reviewButtonContainer, style.marginTop]}>
          <Button handleClick={() => handleViewRepository(repositoryId)} style={style.buttonOne} labelTextColor={'whiteText'} fontSize={'heading'} fontWeight={'bold'}>View Repository</Button>
          <Button handleClick={() => handleDeleteReview(id)} style={style.buttonTwo} labelTextColor={'whiteText'} fontSize={'heading'} fontWeight={'bold'}>Delete Review</Button>
        </View>}
      </View>
    </View>
  )
};

export default ReviewItem;