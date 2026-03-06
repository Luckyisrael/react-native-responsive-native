export interface Config {
    baseWidth: number;
    baseHeight: number;
}

export const DEFAULT_CONFIG: Config = {
    baseWidth: 375,
    baseHeight: 812,
};

let currentConfig: Config = { ...DEFAULT_CONFIG };

/** Set your Figma/Sketch design dimensions */
export const setDesignSize = (width: number, height: number): void => {
    currentConfig = { baseWidth: width, baseHeight: height };
};

export const getConfig = (): Readonly<Config> => currentConfig;
