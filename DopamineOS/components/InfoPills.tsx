import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, useColorScheme } from "react-native";
import { Colors } from '@/constants/Colors';

type PillFormat = "text" | "date" | "time" | "datetime";

type Pill = {
    key?: string;
    format?: PillFormat;
    value?: string | number | Date;
    text?: string;
    formatter?: (ctx: { value?: any; locale?: string; timeZone?: string }) => string;
    variant?: "default" | "primary" | "secondary" | "glass" | "success" | "warning" | "error";
    textStyle?: TextStyle;
    pillStyle?: ViewStyle;

}

type Props = {
    pills: Pill[];
    variant?: "default" | "primary" | "secondary" | "glass" | "success" | "warning" | "error";
    containerStyle?: ViewStyle;
    pillStyle?: ViewStyle;
    textStyle?: TextStyle;
    locale?: string;
    timeZone?: string;
    
    forceScheme?: 'light' | 'dark';

};

export function CurrentDatePill({
    pills,
    variant = "default",
    containerStyle,
    pillStyle,
    textStyle,
    locale,
    timeZone,
    forceScheme
}: Props) {
    const deviceScheme = useColorScheme();
    const scheme = forceScheme ?? deviceScheme ?? 'light';

    const theme = Colors[scheme];
    const textColor = theme.text;

    const formatValue = (pill: Pill): string => {

        if (typeof pill.formatter === "function") return pill.formatter({ value: pill.value, locale, timeZone });
        const fmt: PillFormat = pill.format ?? "text";
        if (fmt === "text") return (pill.text ?? String(pill.value ?? "")).trim();

        const d = pill.value instanceof Date ? pill.value : new Date(pill.value ?? Date.now());
        if (fmt === "date")
            return d.toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric", timeZone });
        if (fmt === "time")
            return d.toLocaleTimeString(locale, { hour: "numeric", minute: "2-digit", timeZone });

        return `${d.toLocaleDateString(locale, { month: "short", day: "numeric", year: "numeric", timeZone })} • ${d.toLocaleTimeString(locale, { hour: "numeric", minute: "2-digit", timeZone })}`;
    };
    return (
        <View style={[Colors, containerStyle]}>
            {pills.map((p, i) => {
                const label = formatValue(p);
                const v = p.variant ?? variant;

                return (
                    <View
                        key={p.key ?? `pill-${i}`}
                        style={[
                            styles.pillBase,
                            v === "primary" && styles.pillPrimary,
                            v === "secondary" && styles.pillSecondary,
                            v === "glass" && styles.pillGlass
                        ]}
                    >
                        <Text
                            style={[
                                styles.textBase,
                                (v === "secondary" || v === "glass") && styles.textDim,
                                textStyle,
                                p.textStyle,
                            ]}
                            numberOfLines={1}
                        >
                            {label}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}


const styles = StyleSheet.create({
    row: { flexDirection: "row", flexWrap: "wrap", gap: 8, alignItems: "center" },
    pillBase: { borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1 },
    pillPrimary: { backgroundColor: "#111827", borderColor: "#111827" },
    pillSecondary: { backgroundColor: "transparent", borderColor: "rgba(156,163,175,0.6)" },
    pillGlass: { backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" },
    textBase: { fontSize: 13, fontWeight: "600", color: "#FFFFFF" },
    textDim: { color: "rgba(255,255,255,0.9)" },
});
