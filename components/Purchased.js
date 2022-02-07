import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Purchased = (props) =>{
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);
  return(
    <View style={styles.purchasedBox}>
        <Text style={styles.purchasedText}>Purchased Items</Text>
        <Icon name="trash" size={25} style={{paddingLeft: 100}} onPress={()=> props.emptyPurchased()}/>
    </View>
  );
};


const styles = StyleSheet.create({
  purchasedBox: {
      backgroundColor: '#e4fad1',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  purchasedText: {
      padding: 9,
      color: '#3d730d',
      fontSize: 20,
      textAlign: 'center',
  }
});
export default Purchased;