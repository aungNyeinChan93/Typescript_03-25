import {Score} from './test';
import {Subject} from "./test";
import useNumber from "./export/useNumberHook";
import useCounter from "./export/useCounter";
import Test from "./export/useFuntions";


const newSub = new Subject('java', 'professional')
newSub.information()

const {funName} = useNumber();
console.log(funName);
const {count, increment} = useCounter();
console.log(count);
console.log(increment(count))

const {alert, logger} = Test();
logger('hello');


// Generics 👇👇👇
// function
function testGeneric<T>(arg: T): T {
    return arg;
}

console.log(testGeneric<string>("testGeneric"));
console.log(testGeneric<number>(12));
console.log(testGeneric<boolean>(false));

// arrow function with multi type generics
const testLogger = <T, U>(message: T, text: U): void => {
    console.log(message, text);
}
testLogger<undefined, string>(undefined, 'this is text');

// Generic Interface
interface Container<T> {
    type: string,
    value: T,
}

const strContainer: Container<string> = {
    type: "string container",
    value: 'my strContainer one'
};
const numContainer: Container<number> = {
    type: 'number Container',
    value: 2,
}
const enumContainer: Container<Score> = {
    type: "enum container",
    value: Score.draw
}

console.log(strContainer);
console.log(numContainer);
console.log(enumContainer);

// Generic Classes
class ContainerClass<T> {
    value: T;
    constructor(public type: string, value: T) {
        this.value = value;
    }
}
const strContainerClass = new ContainerClass<string>('string container', 'my strContainer one');
const numberContainer = new ContainerClass<number>('number container', 22)
console.log(strContainerClass.value, numberContainer.value);

class BankAcc<T> {
    private balance:T;
    constructor(openingBalance:T) {
        this.balance = openingBalance;
    }
    deposit(amount:T) {
        // @ts-ignore
        this.balance += amount;
    }
    withDraw(amount:T):boolean{
        if(amount<this.balance){
            // @ts-ignore
            this.balance -= amount;
            return true;
        }
        return false;
    }
    getBalance():T{
        return this.balance;
    }
}

const myAcc1 = new BankAcc<number>(1000);
myAcc1.deposit(100);
myAcc1.withDraw(900);
console.log(myAcc1.getBalance());

const myAcc2 = new BankAcc<string>('1000$');
myAcc2.deposit('100$');
myAcc2.withDraw('900$');
console.log(myAcc2.getBalance()); //1000$100$




