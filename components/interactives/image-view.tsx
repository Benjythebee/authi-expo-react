import { StyleSheet, View, type ViewProps } from 'react-native';

import { useInteractiveConfig } from '@/context/config';
import { useThemeColor } from '@/hooks/use-theme-color';
import { InteractiveRow } from '@/types';

const defaultData:InteractiveRow = {
  id: 0,
  store_id: '',
  image: '',
  metadata: {
    trigger:{
        type:'button',
        position:{x:50,y:50},
        label:'Click me',
        scale:1,
    },
    action:{
      type:'modal',
      content:{
        title:'Default Modal',
        body:'This is a default modal content.'
      }
    },
  },
  created_at: new Date(),
}

export type ImageViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ImageView({ style, lightColor, darkColor, ...otherProps }: ImageViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const config = useInteractiveConfig();
    const data = config || defaultData;

    const styles = stylesFactory(data.image);


  return <View style={[styles.container]} {...otherProps} />;
}



const stylesFactory = (imageUrl:string) => StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(http://localhost:3000/images/${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // In React Native, all dimensions are unitless and represent density-independent pixels.
  },
});