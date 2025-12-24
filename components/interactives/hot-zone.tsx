import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface HotZoneProps {
    position: [number, number];
    onPress?: () => void;
    width?: number;
    height?: number;
    scale?: number;
    visible?: boolean;
}

const HotZone: React.FC<HotZoneProps> = ({ 
    position, 
    onPress, 
    scale=1,
    visible=true,
    width = 96, 
    height = 96 
}) => {

    return (
        <TouchableOpacity
            style={[
                styles.hotZone,
                {
                    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
                    left: `${position[0]}%`,
                    top: `${position[1]}%`,
                    opacity: visible ? 0.8 : 0,
                    width: width * scale,
                    height: height * scale,
                    
                },
            ]}
            onPress={onPress}
            activeOpacity={0.1}
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