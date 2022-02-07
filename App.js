import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuid from 'react-native-uuid';
import Purchased from './components/Purchased';
import PurchasedList from './components/PurchasedList';
const App = () =>{
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Juice'},
  ]);

  const [purchasedItems, setPurchasedItems] = useState([
    {id: uuid.v4(), text: 'Purchased one'},
  ]);

  const deleteItem = (id) =>{
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const emptyPurchased = ()=>{
    setPurchasedItems(prevPurchasedItems=>{
      return prevPurchasedItems.filter(item => !item.id);
    });
  }

  const addToPurchased = (item) =>{
    setPurchasedItems(prevPurchasedItems =>{
      return [item, ...prevPurchasedItems]
    });
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    }else{
      setItems(prevItems =>{
        return [{id: uuid.v4(), text: text},...prevItems]
      })
    }
  }

  return(
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/> 
      <FlatList
        style={{flex:1}}
        data = {items}
        renderItem={({item}) => <ListItem item={item} addToPurchased = {addToPurchased} deleteItem={deleteItem} />}
      />
      <Purchased emptyPurchased={emptyPurchased}/>
      <FlatList
        data={purchasedItems}
        renderItem={({item}) => <PurchasedList item={item} />}
        style={{flex:1}}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    paddingTop: 60,
  },
});
export default App;