import React from 'react';
import {TextInput, View} from 'react-native';
import {Rating} from 'react-native-elements';
import {Reply} from '../../assets/icons';
import {PrimaryButton} from '../../components/atoms/buttons';
import {Row} from '../../components/atoms/row';
import {TouchableRow} from '../../components/atoms/touchable-row';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Regular from '../../typography/regular-text';
import styles from './styles';
const Comments = props => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View
          style={{
            paddingVertical: mvs(17),
            paddingHorizontal: mvs(10),
            backgroundColor: colors.white,
            borderWidth: 0.5,
            borderColor: colors.border,
            borderRadius: mvs(10),
          }}>
          <TextInput
            style={{
              textAlignVertical: 'top',
              paddingHorizontal: mvs(10),
              borderWidth: 0.5,
              borderColor: colors.border,
              borderRadius: mvs(10),
              backgroundColor: colors.F5F5F6,
              height: mvs(125),
              width: '100%',
            }}
            placeholder={'Add your comment here'}
          />
          <PrimaryButton
            title={'SEND'}
            containerStyle={{
              alignSelf: 'flex-end',
              marginTop: mvs(10),
              width: mvs(130),
            }}
          />

          <View style={styles.rotate} />
        </View>
        <View
          style={{
            padding: mvs(15),
            borderRadius: mvs(10),
            marginTop: mvs(20),
            backgroundColor: colors.white,
          }}>
          <Regular
            style={{}}
            label={'Compliant'}
            color={colors.black}
            fontSize={mvs(14)}
          />
          <Regular
            style={{marginTop: mvs(10), color: colors.black, fontSize: mvs(12)}}
            label={`Sportsman’s Guide members receive 10% discount on all orders (5% on ammunition & firearms). Membership is $39.99 per year, no auto renewals.`}
            fontSize={mvs(12)}
            color={colors.lightGray}
          />
        </View>

        <Row
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
        </Row>
      </View>
    </View>
  );
};
export default Comments;
