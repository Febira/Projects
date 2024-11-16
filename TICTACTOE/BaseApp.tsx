import { SafeAreaView,StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'
import BaseScreen from './BaseScreen'


function baseApp (): JSX.Element {
  const [isCross,setIsCross] = useState<boolean>(false)
  const [gameWinner, setGameWinner] = useState<String>('')
  const [gameState,setGameState] = useState(new Array(9).fill('empty,0,9'))
  const reloadGame = () => {
    setIsCross(false)
    setGameWinner('')
    setGameState(new Array(9).fill('empty',0,9))
  }

  const checkIsWinner = () => {
    
  }
  return(
    <SafeAreaView>
      <View>
        <Text>
          TIC TAC TOE GAME
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default baseApp

const styles = StyleSheet.create({})