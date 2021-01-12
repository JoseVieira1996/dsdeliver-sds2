import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';
import OrderCard from '../OrderCard';


function Orders () {

    
    
  return (
      <>
    <Header /> 
    <ScrollView style = {styles.container}>
      <OrderCard />
      <OrderCard />
    

    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  }
});
   

export default Orders;
