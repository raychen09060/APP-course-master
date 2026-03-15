import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

export default function NewSec({ book_data }) {
    return(
        <View style={styles.newSec_container}>
            <View style={styles.NewSec_title_container}>
                <Text style={styles.NewSec_title_text}>Newest </Text>
            </View>
            <View style={styles.NewSec_FlatList_container}>
                <FlatList
                    data={ book_data }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <View style={styles.NewSec_book_container}>
                            <View style={styles.NewSec_book_Image_container}>
                                <Image source={item.img} style={styles.NewSec_book_Image} resizeMode="cover"/>
                            </View>
                            <Text style={styles.NewSec_book_Title}>{item.title}</Text>
                            <Text style={styles.NewSec_book_Author}>{item.Author}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    newSec_container:{
        width: "100%",
        height: 400,
/*         borderWidth: 2,
        borderColor: "#ff0000", */
    },
    NewSec_title_container:{
        width: "100%",
        height: "10%",
        paddingLeft: "5%",
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    },
    NewSec_title_text:{
        fontSize: 24,
        fontWeight: "bold",
    },
    NewSec_FlatList_container:{
        width: "100%",
        height: "90%",
        marginLeft: "5%",
    },
    NewSec_book_container:{
        display: "flex",
        justifyContent: "space-around",
        width: 200,
        height: 350,
        marginRight: 15,
/*         borderWidth: 2,
        borderColor: "#0000ff", */
    },
    NewSec_book_Image_container:{
        width: "100%",
        height: "85%",
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    },
    NewSec_book_Image:{
        height: "100%",
        width: "100%",
        borderRadius: 10,
    },
    NewSec_book_Title:{
        fontSize: 16,
        fontWeight: "bold",
    },
    NewSec_book_Author:{
        fontSize: 12,
    },
});