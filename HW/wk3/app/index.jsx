import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import PopularSec from '../components/PopularSec';
import NewSec from '../components/NewSec';
import Footer from '../components/Footer';

const PopularSec_books = [
  {
    id: "1",
    title: "Fashionopolis",
    Author: "Dana Thomas",
    img: require('../images/img_book_fashionopolis.png'),
    description: "Fashionopolis is a book by Dana Thomas that explores the impact of the fashion industry on the environment and society. It delves into the history of fashion, its current state, and the efforts being made to create a more sustainable future for the industry. The book covers topics such as fast fashion, labor practices, and the environmental consequences of clothing production. It also highlights innovative designers and companies that are working towards a more ethical and sustainable fashion industry.",
    cost: "$49.99",
  },
  {
    id: "2",
    title: "Chanel",
    Author: "Patrick Mauriès",
    img: require('../images/img_book_chanel.png'),
    description: "Chanel is a book by Patrick Mauriès that provides an in-depth look at the life and work of the iconic fashion designer Coco Chanel. The book explores Chanel's rise to fame, her influence on the fashion industry, and her enduring legacy. It covers her early life, her innovative designs, and her impact",
    cost: "$39.99",
  },
  {
    id: "3",
    title: "Calligraphy",
    Author: "June & Lucy",
    img: require('../images/img_book_calligraphy.png'),
    description: "Calligraphy is a book by June & Lucy that explores the art of beautiful writing. The book covers the history of calligraphy, different styles and techniques, and provides step-by-step instructions for creating stunning calligraphic designs. It also includes tips and inspiration for both beginners and experienced calligraphers, making it a comprehensive guide to the world of calligraphy.",
    cost: "$29.99",
  },
];

const NewSec_books = [
  {
    id: "1",
    title: "Yves Saint Laurent",
    Author: "Suzy Menkes",
    img: require('../images/img_book_ysl.png'),
    description: "Yves Saint Laurent is a book by Suzy Menkes that provides an in-depth look at the life and work of the legendary fashion designer Yves Saint Laurent. The book explores Saint Laurent's rise to fame, his influence on the fashion industry, and his enduring legacy. It covers his early life, his innovative designs, and his impact on fashion history.",
    rate: 4,
    cost: "$49.99",
  },
  {
    id: "2",
    title: "The book of Signs",
    Author: "Rudolf Koch",
    img: require('../images/img_book_tbos.png'),
    description: "The book of Signs is a book by Rudolf Koch that explores the art of typography and letter design. The book covers the history of typefaces, different styles and techniques, and provides step-by-step instructions for creating stunning typographic designs. It also includes tips and inspiration for both beginners and experienced typographers, making it a comprehensive guide to the world of typography.",
    rate: 3,
    cost: "$39.99",
  },
  {
    id: "3",
    title: "Stiched Up",
    Author: "Tansy E. Hoskin",
    img: require('../images/img_book_stitchedup.png'),
    description: "Stiched Up is a book by Tansy E. Hoskin that explores the art of embroidery and textile design. The book covers the history of stitching techniques, different styles and methods, and provides step-by-step instructions for creating stunning embroidered designs. It also includes tips and inspiration for both beginners and experienced embroiderers, making it a comprehensive guide to the world of textile arts.",
    rate: 3,
    cost: "$29.99",
  },
];

const BookSec = [
  {id: "Popular", data: PopularSec_books},
  {id: "New", data: NewSec_books},
];

export default function BookStore() {

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <FlatList
        data={ BookSec }
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.section_container}>
            {item.id === "Popular" ? <PopularSec book_data={item.data}/> : <NewSec book_data={item.data}/>}
          </View>
        )}
      />
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  section_container: {
    width: "100%",
    marginBottom: 10,
/*     borderWidth: 2,
    borderColor: "#ff0000", */
  },
});

