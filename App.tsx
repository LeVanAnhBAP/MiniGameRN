import { useState } from "react";
import { StatusBar } from "react-native";
import { View, StyleSheet, Button, FlatList, ImageBackground, SafeAreaView } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function App() {

    const [userNumber, setUserNumber] = useState('')
    const [gameIsOver, setGameIsOver] = useState(false)
    const [gussRounds, setGussRounds] = useState(0)

    useFonts({
        'open-sands-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'open-sands-regular': require('./assets/fonts/OpenSans-Regular.ttf')
    })

    function startNewGameHandler() {
        setUserNumber('')
        setGussRounds(0)
        setGameIsOver(false)
    }

    // if(!fontsLoaded) {
    //     return <AppLoading></AppLoading>
    // }

    function pickedNumberHandler(pickedNumber: string) {
        setUserNumber(pickedNumber)
    }

    function gameOverHandler(length: number) {
        setGameIsOver(true)
        setGussRounds(length)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}></StartGameScreen>

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    }

    console.log("game", gameIsOver)
    if (gameIsOver && (userNumber || userNumber !== "")) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={gussRounds.toString()} onStartNewGame={startNewGameHandler} />
    }

    const statusBarColor = Colors.primary700; // Màu nền cho StatusBar
    const gradientColors = [Colors.primary700, Colors.accent500]; // Mảng màu nền cho LinearGradient
    const backgroundImageSource = require('./assets/images/background.png');

    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={statusBarColor}></StatusBar>
            <LinearGradient colors={gradientColors} style={styles.rootScreen}>
                <ImageBackground imageStyle={styles.backgroundImage} style={styles.rootScreen} source={backgroundImageSource} resizeMode={'cover'}>
                    <SafeAreaView style={[styles.rootScreen, { marginTop: getStatusBarHeight() }]}>{screen}</SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15
    }
})