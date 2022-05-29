import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const ShopScreen = () => {
  return (
    <View>
      <Text>ShopScreen</Text>
      <Ionicons name="md-checkmark-circle" size={200} color="purple" />
      <Ionicons name="md-checkmark-circle" size={300} color="green" />
      <Ionicons name="md-checkmark-circle" size={400} color="blue" />
    </View>
  )
}

export default ShopScreen

const styles = StyleSheet.create({})