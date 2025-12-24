import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

interface HotZoneProps {
    position: [number, number];
    onPress?: () => void;
    width?: number;
    height?: number;
}

const HotZone: React.FC<HotZoneProps> = ({ 
    position, 
    onPress, 
    width = 50, 
    height = 50 
}) => {
    const [x, y] = position;

    return (
        <TouchableOpacity
            style={[
                styles.hotZone,
                {
                    left: x,
                    top: y,
                    width,
                    height,
                },
            ]}
            onPress={onPress}
            activeOpacity={0.7}
        />
    );
};

const styles = StyleSheet.create({
    hotZone: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 0, 0, 0.3)', // Semi-transparent red for debugging
        borderRadius: 4,
    },
});

export default HotZone;