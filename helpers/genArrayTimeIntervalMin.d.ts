interface ITimeFilter { text: string; value: number }

declare function genArrayTimeIntervalMin(number: number, interval?: number, short?: boolean): never | ITimeFilter[];

export { genArrayTimeIntervalMin };
export default genArrayTimeIntervalMin;