import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const PurchasedList = (props) =>{
  return(
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{props.item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  listItem: {
      padding: 15,
      backgroundColor: '#f1fce8',
      borderBottomWidth: 1,
      borderColor: '#d7f7ba',
  },
  listItemView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  listItemText: {
      fontSize: 18,
  }
});
export default PurchasedList;