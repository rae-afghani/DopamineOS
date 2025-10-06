import * as React from 'react';
import { Alert, Keyboard, Platform, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Sun } from '@/components/AnimatedIcons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import PrimaryButton from '@/components/buttons/primary';
import SecondaryButton from '@/components/buttons/secondary';
import ButtonRow from '@/components/buttons/ButtonRow';
import { CurrentDatePill } from '@/components/InfoPills';

import { KeyboardState } from 'react-native-reanimated';
import { SpacerMD } from '@/components/Spacers';


export default function HomeScreen() {
  return (

    <ParallaxScrollView>

      <ThemedView style={styles.headerContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Hi, Rae</ThemedText>
          <Sun />
        </ThemedView>

        <ThemedView>
        <CurrentDatePill pills={[{ key: "date", format: "date", variant: "primary", value: new Date() }]} />
</ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">What are we getting done today?</ThemedText>
      </ThemedView>
      <SpacerMD />

      {/* Buttons */}
      <PrimaryButton label="Dashboard" size='lg' />
      <PrimaryButton label="Plan" size='lg' onPress={() => { Alert.alert('Coming soon!'); }} />
      <PrimaryButton label="Track" size='lg' onPress={() => { Alert.prompt('howdy', 'say it back'); }} />
      <PrimaryButton label="Journal" size='lg' disabled />
      <PrimaryButton label="Account" size='lg' disabled />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 0,
    paddingBottom: 0,
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
