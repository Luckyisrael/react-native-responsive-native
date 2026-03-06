import { Dimensions, ScaledSize } from 'react-native';

/** Get current screen dimensions */
export const getScreen = (): ScaledSize => Dimensions.get('window');

export const getWidth = (): number => getScreen().width;
export const getHeight = (): number => getScreen().height;
