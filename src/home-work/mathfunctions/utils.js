export const CONFIGURE_CANVA = {
    CANVA_ID: 'fondo',
    SCALE: 50,
};
export const COLORS = {
    red: 'red',
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    black: 'black',
    gray: 'gray',
    orange: 'orange',
    pink: 'pink',
    purple: 'purple',
    brown: 'brown',
    cyan: 'cyan',
    lime: 'lime',
    magenta: 'magenta',
    silver: 'silver',
    teal: 'teal',
    indigo: 'indigo',
    maroon: 'maroon',
    navy: 'navy',
};
export function getRamdomColor() {
    const keys = Object.keys(COLORS);
    const index = Math.floor(Math.random() * keys.length);
    const color = keys[index];
    return color;
}
//# sourceMappingURL=utils.js.map