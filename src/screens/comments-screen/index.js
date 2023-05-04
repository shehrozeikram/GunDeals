import React, {useState} from 'react';
import {TextInput, View, ScrollView, FlatList} from 'react-native';
import {Rating} from 'react-native-elements';
import {Reply} from '../../assets/icons';
import {PrimaryButton} from '../../components/atoms/buttons';
import {Row} from '../../components/atoms/row';
import {TouchableRow} from '../../components/atoms/touchable-row';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Regular from '../../typography/regular-text';
import styles from './styles';
import moment from 'moment';
import Bold from '../../typography/bold-text';
const Comments = ({comments = [], onCommentSend = arg => {}}) => {
  const [description, setDescription] = useState('');

  const renderItem = ({item}) => {
    const time = moment(item?.created_at).fromNow();
    return (
      <View style={styles.comment}>
        <Bold
          style={{}}
          label={item?.user?.username}
          color={colors.black}
          fontSize={mvs(14)}
        />

        <Regular
          style={{marginTop: mvs(2), color: colors.black, fontSize: mvs(12)}}
          label={item?.body}
          fontSize={mvs(12)}
          color={colors.lightGray}
        />
        <Regular
          style={{alignSelf: 'flex-end'}}
          label={time + ''}
          color={colors.lightGray}
          fontSize={mvs(11)}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled contentContainerStyle={styles.body}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            onChangeText={val => setDescription(val)}
            placeholder={'Add your comment here'}
          />
          <PrimaryButton
            title={'SEND'}
            onPress={() => onCommentSend(description)}
            containerStyle={{
              alignSelf: 'flex-end',
              marginTop: mvs(10),
              width: mvs(130),
            }}
          />

          <View style={styles.rotate} />
        </View>
        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
        />
        {/* <Row
          style={{
            marginVertical: mvs(20),
            padding: mvs(20),
            borderColor: colors.border,
            borderBottomWidth: 2,
          }}>
          <Rating
            tintColor={colors.bg}
            showRating={false}
            startingValue={4}
            imageSize={mvs(18)}
            readonly
            style={{alignSelf: 'flex-start'}}
          />
          <TouchableRow>
            <Reply style={{marginHorizontal: mvs(10)}} />
            <Regular label={'Reply'} />
          </TouchableRow>
        </Row> */}
      </ScrollView>
    </View>
  );
};
export default Comments;
