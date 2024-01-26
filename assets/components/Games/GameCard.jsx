import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const GameCard = (props) => {
    const navigation = useNavigation();

    const handlePlayButtonPress = () => {
        // Navigate to the screen specified in the gamePage prop
        navigation.navigate(props.gamePage);
    };

    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={props.imageSource} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.textContainer}>
                <Text>{props.gameName}</Text>
                <TouchableOpacity onPress={handlePlayButtonPress}>
                    <View style={styles.playButton}>
                        <Text style={styles.playButtonText}>Play</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FAF6F0',
        borderRadius: 10
    },
    imageContainer: {
        flex: 2,
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#F4DFC8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'cover',
    },
    textContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF6F0',
        paddingVertical: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderRadius: 10
    },
    playButton: {
        marginTop: 10,
        backgroundColor: '#F4DFC8',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
    },
    playButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default GameCard;
