import { PixelRatio } from 'react-native';
import { getConfig } from '../config';
import { getHeight, getWidth } from '../core/dimensions';
import { isPhone } from '../device';

/** Width percentage */
export const wp = (percentage: number): number => {
    return (getWidth() * percentage) / 100;
};

/** Height percentage */
export const hp = (percentage: number): number => {
    return (getHeight() * percentage) / 100;
};

/** Scale from design to device */
export const s = (size: number): number => {
    const ratio = getWidth() / getConfig().baseWidth;
    return PixelRatio.roundToNearestPixel(size * ratio);
};

/** Font with accessibility scaling */
export const f = (size: number): number => {
    return size * PixelRatio.getFontScale();
};

/** Responsive value by device */
export const rv = <T>(values: { phone: T; tablet: T }): T => {
    return isPhone() ? values.phone : values.tablet;
};

// Aliases for clarity
export const widthPercent = wp;
export const heightPercent = hp;
export const scale = s;
export const font = f;
export const responsiveValue = rv;
