import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import NavBar from "../../NavBar/NavBar";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Hello</Text>
                </View>
                {/* NavBar is placed outside the content */}
                <NavBar />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#F4EAE0'
    },
    content: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
    },
});

export default HomeScreen;
