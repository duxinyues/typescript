const array: (number | string)[] = [1, "90", 4, 5, 6];

const array1: Array<string | number> = [23, 43, "324"]

const red: ReadonlyArray<number> = [342, 3]

const color: readonly number[] = [32, 546];

const green: Readonly<number[]> = [2, 3];

// 定义元组
const point: [number, string] = [1, "32"]

// 定义只读元组
const readonlyArr: readonly [number, number] = [2, 3];

const readonlyT: Readonly<[number, number]> = [32, 7];


const tuple: [number, ...string[]] = [1, "53", "23"]
tuple.push(90);

console.log(tuple.length);
console.log("tuple",tuple)