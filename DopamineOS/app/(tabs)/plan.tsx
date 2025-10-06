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

import { SpacerXS, SpacerSM, SpacerMD, SpacerLG, SpacerXL } from '@/components/Spacers';
import { KeyboardState } from 'react-native-reanimated';


export default function HomeScreen() {
  return (

    <ParallaxScrollView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">What's the plan?</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Fill out today's Eisenhower Matrix.</ThemedText>
        <PrimaryButton label="Start" size='lg' />
      </ThemedView>
    <SpacerSM/>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">The Big 3</ThemedText>
        <ThemedView style={[styles.titleContainer, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}]}>
        <PrimaryButton label="Task 1" size='md' />
        <PrimaryButton label="Task 2" size='md' />
        <PrimaryButton label="Task 3" size='md' />
        </ThemedView>
        

      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
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
