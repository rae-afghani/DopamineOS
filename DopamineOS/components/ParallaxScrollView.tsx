import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

import type { ColorValue } from 'react-native';


const headerHeight = 16;

type Props = PropsWithChildren<{
}>;


type GradientTuple = readonly [ColorValue, ColorValue, ...ColorValue[]];

const lightGradient: GradientTuple = [Colors.light.gradient1, Colors.light.gradient2];
const darkGradient: GradientTuple = [Colors.dark.gradient1, Colors.dark.gradient2];

export default function ParallaxScrollView({
  children,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-headerHeight, 0, headerHeight],
            [-headerHeight / 2, 0, headerHeight * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-headerHeight, 0, headerHeight], [2, 1, 1]),
        },
      ],
    };
  });
  const scheme = useColorScheme() ?? 'light';
  const colors = scheme === 'dark' ? darkGradient : lightGradient;
  const testtext = 'testing';
  return (

    <ThemedView style={styles.container} lightColor="transparent" darkColor="transparent">

      <LinearGradient
        colors={colors}
        start={{ x: 0, y: -0.25 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.7]}
        style={StyleSheet.absoluteFill}
      />

      <BlurView intensity={100} style={styles.blurContainer}>
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          scrollIndicatorInsets={{ bottom }}
          contentContainerStyle={{ paddingBottom: bottom }}>
          <Animated.View
            style={[
              styles.header,
              headerAnimatedStyle,
            ]}>
          </Animated.View>
          <ThemedView style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
      </BlurView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: headerHeight,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
  blurContainer: {
    flex: 1,
    overflow: 'hidden',
  },
});
