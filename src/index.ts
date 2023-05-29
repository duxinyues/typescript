class Duxin {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    print() {
        return this.name + ":" + this.age;
    }
}


class Duxin1 extends Duxin {
    money: number;

    get(money: number) {
        return this.name + ":" + money
    }
}

console.log(null === undefined)