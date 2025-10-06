import * as React from 'react';
import { Alert, Keyboard, Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import PrimaryButton from '@/components/buttons/primary';
import SecondaryButton from '@/components/buttons/secondary';
import ButtonRow from '@/components/buttons/ButtonRow';

import { KeyboardState } from 'react-native-reanimated';


export default function HomeScreen() {
  return (

    <ParallaxScrollView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">DopamineOS</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Your life, rewired.</ThemedText>
      </ThemedView>

      <PrimaryButton label="Dashboard" size='lg' />
      <PrimaryButton label="Plan" size='lg' onPress={() => { Alert.alert('Coming soon!');}}/>
      <PrimaryButton label="Track" size='lg' onPress={() => { Alert.prompt('howdy', 'say it back'); }} />
      <PrimaryButton label="Journal" size='lg' disabled />
      <PrimaryButton label="Account" size='lg' disabled />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
