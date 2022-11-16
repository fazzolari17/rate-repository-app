import { View } from 'react-native';
import Text from '../../Text';
import styles from '../styles';
import format from 'date-fns/format';

const ReviewItem = ({ review }) => {
  const { id, createdAt, rating, text, user } = review;

  const date = format(new Date(createdAt), 'MM.dd.yyyy')

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
      </View>
    </View>
  )
};

export default ReviewItem;