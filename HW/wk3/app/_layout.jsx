import { Stack, router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
                name="book/[id]"
                options={{
                    title: "",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <View style={styles.icon_container}>
                                <Image source={require('../images/icon_back.png')} style={styles.icon}/>
                            </View>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity>
                            <View style={styles.icon_container}>
                                <Image source={require('../images/icon_bookmark.png')} style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({
    icon_container:{
        display: "flex",
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    icon:{
        width: "80%",
        height: "80%",
    }
});