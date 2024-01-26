import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import NavBar from "../../NavBar/NavBar";
import GameCard from "../../Games/GameCard";
const GameScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Welcome To The Games</Text>
                    <Text>Select Game You Want to Play</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.GameCardContainer}>
                        <View style={styles.Carddisplayer}>
                            <GameCard
                                imageSource={require('../../images/snakeGame.png')}
                                gameName={"Snake Game"}
                                gamePage={"SnakeGame"} />
                        </View>
                        <View style={styles.Carddisplayer}>
                            <GameCard
                                imageSource={require('../../images/tic_tac_image.jpg')}
                                gameName={"Tic Tac Game"}
                                gamePage={"TicTacGame"} />
                        </View>
                        <View style={styles.Carddisplayer}>
                            <GameCard
                                imageSource={require('../../images/memoryImage.png')}
                                gameName={"Pairs Game"}
                                gamePage={"MemoryGame"}
                            />
                        </View>
                        <View style={styles.Carddisplayer}>
                            <GameCard
                                imageSource={require('../../images/puzzleIcon.jpg')}
                                gameName={"Cross  word"}
                                gamePage={"Crossword"} />
                        </View>
                    </View>
                </View>
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
    heading: {
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 200
    },
    headingText: {
        fontSize: 25
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    GameCardContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    Carddisplayer: {
        width: 250,
        height: 100,
        backgroundColor: '#FAF6F0',
        margin: 15,
        borderRadius: 10
    }

});

export default GameScreen;
