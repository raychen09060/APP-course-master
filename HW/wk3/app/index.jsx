import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import Header from '../components/Header';

export default function DiaryListScreen() {

  return (
    <>
      <Header/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});

