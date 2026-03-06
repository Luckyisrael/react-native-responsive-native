import { getWidth, getHeight } from './core/dimensions';

const TABLET_BREAKPOINT = 768;

export const isPhone = (): boolean => Math.min(getWidth(), getHeight()) < TABLET_BREAKPOINT;
export const isTablet = (): boolean => Math.min(getWidth(), getHeight()) >= TABLET_BREAKPOINT;
