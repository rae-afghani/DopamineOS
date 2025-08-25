import { StyleSheet, View } from 'react-native';
import { ReactNode } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {
    children: ReactNode; // for child elements
}

export default function ButtonRow({ children }: Props) {
    return (
        <View style={styles.buttonRow}>
            {Array.isArray(children) &&
                children.map((child, index) => (
                    <View key={index} style={styles.buttonWrapper}>
                        {child}
                    </View>
                ))}
        </View>
    );


}

const styles = StyleSheet.create({
    buttonRow: {
        marginHorizontal: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        padding: 0,
    },
    buttonWrapper: {
        flex: 1,            // expand equally
        maxWidth: '50%',    // cap at half width
    },
});
