import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CardRecomendation = ({children, title, onPress}) => {
  return (
    <View style={styles.cardRecomendationContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: 16,
        }}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 10,
              color: '#053DC7',
            }}>
            Lihat Semua
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{paddingVertical: 5}} horizontal={true}>
        {children}
      </ScrollView>
    </View>
  );
};

export default CardRecomendation;

const styles = StyleSheet.create({
  cardRecomendationContainer: {
    marginTop: 30,
  },
  title: {
    marginLeft: 16,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#262626',
    marginBottom: 10,
    maxWidth: '50%',
  },
});
