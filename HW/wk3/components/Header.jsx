import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header_container}>
            <View style={styles.icon_menu_container}>
                <Image source={require('../images/icon_menu.png')} style={styles.icon_menu}/>
            </View>
            <View style={styles.icon_search_container}>
                <Image source={require('../images/icon_search.png')} style={styles.icon_search}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header_container:{
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
/*         borderWidth: 2,
        borderColor: "#ff0000", */
    },
    icon_menu_container:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "15.5%",
        height: "100%",
/*         borderWidth: 2,
        borderColor: "#0000ff", */
    },
    icon_menu:{
        width: "40%",
        height: "40%",
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    },
    icon_search_container:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "15.5%",
        height: "100%",
/*         borderWidth: 2,
        borderColor: "#0000ff", */
    },
    icon_search:{
        width: "35%",
        height: "35%",
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    }
});