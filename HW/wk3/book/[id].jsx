import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { BookSec } from '../../data/books';

export default function Books(){
    const { id } = useLocalSearchParams();
    const allBooks = BookSec.flatMap((section) => section.data);
    const books = allBooks.find((item) => item.id === id);
    return (
        <View style={styles.Book_container}>
            <View style={styles.Book_Image_container}>
                <Image source={books.img} style={styles.Book_Image} resizeMode="cover"/>
            </View>
            <Text style={styles.Book_Title}>{books.title}</Text>
            <Text style={styles.Book_Author}>{books.Author}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Book_container: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        backgroundColor: '#ffffff',
    },
    Book_Image_container:{
        width: 200,
        height: 400,
    },
    Book_Image: {
        width: "100%",
        height: "100%",
    },
    Book_Title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    Book_Author: {
        fontSize: 14,
    },

});