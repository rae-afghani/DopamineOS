import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet } from 'react-native';


import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';

const spacerXS = 8;
const spacerSM = 12;
const spacerMD = 16;
const spacerLG = 24;
const spacerXL = 32;

export function SpacerXS(){
  return (
    <ThemedView style={styles.spacerXS}></ThemedView>
  );
}
export function SpacerSM(){
  return (
    <ThemedView style={styles.spacerSM}></ThemedView>
  );
}
export function SpacerMD(){
  return (
    <ThemedView style={styles.spacerMD}></ThemedView>
  );
}
export function SpacerLG(){
  return (
    <ThemedView style={styles.spacerLG}></ThemedView>
  );
}
export function SpacerXL(){
  return (
    <ThemedView style={styles.spacerXL}></ThemedView>
  );
}

const styles = StyleSheet.create({
  spacerXS: {
    marginTop: spacerXS,
    overflow: 'hidden',
  },
  spacerSM: {
    marginTop: spacerSM,
    overflow: 'hidden',
  },
  spacerMD: {
    marginTop: spacerMD,
    overflow: 'hidden',
  },
  spacerLG: {
    marginTop: spacerLG,
    overflow: 'hidden',
  },
  spacerXL: {
    marginTop: spacerXL,
    overflow: 'hidden',
  },
});
