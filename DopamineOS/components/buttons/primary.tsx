import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Colors } from '@/constants/Colors';


type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 0,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 3,
    backgroundColor: '#34f2ad',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: Colors.light.tint,
    fontSize: 16,
  },
});
