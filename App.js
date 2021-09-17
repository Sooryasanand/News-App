import React from 'react';
import { View } from 'react-native';

import Header from './components/header/header';
import List from './components/list/list';


export default function App() {
  return (
    <View>
      <Header />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </View>
  );
}