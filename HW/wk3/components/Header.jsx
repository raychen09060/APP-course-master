import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
    return(
        <View style={styles.container}>
            <Image source={require('../images/icon_menu.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "7%",
        marginTop: 70,
        backgroundColor: "#f5f5f5",
    },
    
});