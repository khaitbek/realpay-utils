export const add = (a: number, b: number): number => {
    return a + b;
};

export const subtract = (a: number, b: number): number => {
    return a - b;
};

export const classnames = (...args: string[]): string => {
    return args.filter(Boolean).join(' ');
};