import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './assets/components/componentsViews/screens/HomeScreen';
import GameScreen from './assets/components/componentsViews/screens/GameScreen';
import QuizScreen from './assets/components/componentsViews/screens/QuizScreen';
import SnakeGame from './assets/components/Games/GameFolder/FirstGame/snakeApp';
import TicTacGame from './assets/components/Games/GameFolder/Tic-tac-Game/TicTacGame';
import MemoryGame from "./assets/components/Games/GameFolder/MemoryGame/MemoryGame";
import CrossWord from './assets/components/Games/GameFolder/CrosswordGridGame/Crossword';
import ExamScreen from './assets/components/componentsViews/screens/Examscreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
            }
          }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{
            title: 'Games',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            title: 'Rights',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }} />
        <Stack.Screen
          name="SnakeGame"
          component={SnakeGame}
          options={{
            title: 'SnakeGame',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
        <Stack.Screen
          name="TicTacGame"
          component={TicTacGame}
          options={{
            title: 'TicTacToeGame',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />

        <Stack.Screen
          name="MemoryGame"
          component={MemoryGame}
          options={{
            title: 'PairGame',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
        <Stack.Screen
          name="Crossword"
          component={CrossWord}
          options={{
            title: 'CrossWordPuzzle',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
        <Stack.Screen
          name="ExamScreen"
          component={ExamScreen}
          options={{
            title: 'Quiz',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
