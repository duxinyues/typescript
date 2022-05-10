## void

void类型表示某个值不存在，这个类型作为函数的返回值类型，当函数没有返回值的时候，那么函数的返回值类型为void

## 枚举类型

枚举类型是由多个枚举成员组成的，每一个枚举成员都是一个常量。

在Typescript中，枚举类型是一种原始类型，也就是基本数据类型。

通过enum关键字来定义。

#### 数值枚举类型

数值型枚举类型，是number类型的子类型，例如：
```
enum Direction {
  Up, Down, Left, Right
}

const direction: number = Direction.Up;


console.log(direction)
```
编译后的js代码为：
```
var Direction;

(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));

var direction = Direction.Up;

console.log(direction);

```

#### 字符串枚举类型

枚举成员的值为字符串
```
enum Directions {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const  directions:string = Directions.Down;


console.log(directions);// DOWN
```

#### 异构型枚举

Typescript允许在一个枚举中定义数值枚举类型成员和字符串枚举成员。
```javascript
enum Color{
  Block = 0,
  White = "white",
}
```

#### 联合枚举类型
枚举类型中所有成员都是字面量枚举成员时，该枚举类型就是联合枚举类型。


## any和unknown顶端类型

所有类型都是any的子类型

unknown类型是比any类型更安全的顶端类型，因为unknown类型只允许赋值给any或者unknown类型，不允许赋值给任何其他的类型。

## never类型
是所有其他类型的子类型
## 数组类型

简便数组类型：使用"[]"来定义是数组类型，例如：

```JavaScript
const arr:number[] = [1,2,3]
```
[]前面的number表示是数组的元素是number，那么这个数组的元素就不能为string。

如果数组的元素有多个类型的话，那么就设置为复合类型：

```JavaScript
const arr:(number|string)[] = ["21",43]
```

泛型数组类型：使用泛型来表示数组：
`Array<number>`
   
```JavaScript
const array1: Array<string | number> = [23, 43, "324"]
```

## 只读数组
定义只读数组：
1. 使用"ReadonlyArray<T>"内置类型,`const red: ReadonlyArray<number> = [342, 3]`
2. 使用readonly修饰符，`const color:readonly number[] = [32,546];`。但是readonly修饰符不能和泛型数组类型一起使用
3. 使用""Readonly<T>工具类型，`const green: Readonly<number[]> = [2, 3]`
