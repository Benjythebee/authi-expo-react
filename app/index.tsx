import { Button, Modal, StyleSheet, View } from 'react-native';

import InteractiveAbsoluteButton from '@/components/interactives/button';
import { ImageView } from '@/components/interactives/image-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useInteractiveConfig } from '@/context/config';
import { useState } from 'react';

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const {metadata} = useInteractiveConfig();

  return (
    <View style={styles.container}>
      <ImageView />
        <InteractiveAbsoluteButton 
          position={[metadata.trigger.position.x, metadata.trigger.position.y]} 
          label={metadata.trigger.label||'Click me!'} 
          onPress={() => setModalVisible(true)} 
        />
      {metadata.action?.type==='modal' && modalVisible && (
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <ThemedView style={styles.modalContainer}>
            <ThemedView style={styles.modalContent}>
                <ThemedText style={{fontSize:18,fontWeight:'bold',marginBottom:10}}>
                    {metadata.action.content.title}
                </ThemedText>

                <ThemedText style={{marginBottom:20}}>
                    {metadata.action.content.body}
                </ThemedText>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </ThemedView>
          </ThemedView>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    minWidth: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});