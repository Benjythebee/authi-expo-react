import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
    position: [number, number];
    label: string;
    onPress?: () => void;
}

const InteractiveAbsoluteButton: React.FC<ButtonProps> = ({ position, label, onPress }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    transform: [{ translateX: -50 }, { translateY: -50 }],
                    left: `${position[0]}%`,
                    top: `${position[1]}%`,
                }
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default InteractiveAbsoluteButton;