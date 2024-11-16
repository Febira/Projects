import { SafeAreaView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { IconProps } from 'react-native-vector-icons/Icon'
import Snackbar from 'react-native-snackbar'

type IconsProps = PropsWithChildren<{
  name:string;
}>
const BaseScreen = ({name}: IconProps) => {
  switch (name) {
    case 'circle':
        return <Icon name="circle-thin" size={38} color="#F7CD2E" />
      break;
    case 'cross':
        return <Icon name="times" size={38} color="#38CC77" />
      break;
    default:
      return < Icon name='penil' size={38} color="#0D0D0D"/>
  }
}

export default BaseScreen

const styles = StyleSheet.create({})