
import * as React from 'react';
import { StyleSheet, View, Pressable, Text, useColorScheme, GestureResponderEvent } from 'react-native';
import { ReactNode } from 'react';
import { Colors } from '@/constants/Colors';
import * as Haptics from 'expo-haptics';

type Size = 'sm' | 'md' | 'lg';

type Props = {
    label?: string;  //label optional, icon buttons

    //events
    onPress?: (e: GestureResponderEvent) => void;
    disabled?: boolean;
    loading?: boolean;

    //icons
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    iconOnly?: boolean;
    dropdown?: boolean;

    //sizing
    size?: Size;
    fullWidth?: boolean;

    accessibilityLabel?: string;

    // for testing
    forceScheme?: 'light' | 'dark';
};


export default function SecondaryButton({
    label,
    onPress,
    disabled = false,
    loading = false,
    iconLeft,
    iconRight,
    iconOnly = false,
    dropdown = false,
    size = 'md',
    fullWidth = false,
    forceScheme,
    accessibilityLabel,
}: Props) {
    const deviceScheme = useColorScheme();
    const scheme = forceScheme ?? deviceScheme ?? 'light';

    //theme is calling colors.ts
    const theme = Colors[scheme];

    const dim = sizeDims[size];

    const textColor = theme.secondaryButtonText;
    const backgroundColor = theme.secondaryButtonBG;

    const caret = dropdown && !iconRight ? <Text style={[ styles.iconText, { color: textColor }]}>▼</Text> : null;

    return (
        <Pressable
            accessibilityRole='button'
            accessibilityState={{ disabled, busy: loading }}
            accessibilityLabel={ accessibilityLabel ?? label }
            disabled={ disabled || loading }
            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
            hitSlop={ 8 }
            style={({ pressed }) => [
                styles.base,
                fullWidth && styles.fullWidth,
                iconOnly ? { width: dim.height, height: dim.height, paddingHorizontal: 0 } : { minHeight: dim.height, paddingHorizontal: dim.ph },
                { backgroundColor: backgroundColor, borderRadius: 12, opacity: disabled ? 0.25 : pressed ? 0.5 : 1 },

            ]}
        >
            {/* ROW */}
            <View style= { styles.row }>
                {/*when the icon exists on the left side or is iconOnly*/}
                { iconLeft ? <View style={[ styles.iconSlot, { marginRight: iconOnly ? 0 : 8 }]}>{ iconLeft }</View> : null }

                {/*if the button is NOT iconOnly*/}
                {!iconOnly && (
                    <Text
                        numberOfLines={ 1 }
                        style={[
                            styles.label,
                            { color: textColor, fontSize: dim.fs, fontWeight: '600' },
                        ]}
                    >
                        { loading ? 'Thinking...' : label }
                    </Text>
                )}

                {/*when the icon exists on the right side or is a caret*/}
                { caret || iconRight ? <View style={[ styles.iconSlot, { marginLeft: iconOnly ? 0 : 8 }]}>{ iconRight ?? caret }</View> : null }
            </View>
        </Pressable>
    );
}

const sizeDims: Record<'sm' | 'md' | 'lg', { height: number; ph: number; fs: number }> = {
  sm: { height: 36, ph: 12, fs: 14 },
  md: { height: 44, ph: 16, fs: 16 },
  lg: { height: 52, ph: 20, fs: 17 },
};


const styles = StyleSheet.create({
    base: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.6,
    },
    fullWidth: {
        alignSelf: 'stretch',
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        // color + size set dynamically
    },
    iconSlot: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconText: {
        fontSize: 14,
    },
});
