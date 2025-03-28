// interface

interface Log {
    logger?: () => void;

    print?(): void;

    add?(num1: number, num2: number): number[]
}

type Methods<T> = {
    methods: T
}

type One = Methods<Log> | { methods: any }

const one: One = {
    methods: {
        logger: () => {
            console.log('this is logger ');
        },
        print() {
            console.log(`this is print methods`);
        }
    }
} as const;

one.methods.logger?.();
one.methods.print?.();

type myNewType = typeof one;

const myAdd: Log = {
    add(a, b) {
        return [a + b]
    }
}
const resultArray = myAdd.add?.(2, 4) || [];
const [result] = resultArray;
console.log(result);

// nameless interface function
interface GetName {
    (first: string, last: string): string;
}

const getName: GetName = (first: string, last: string) => (`${first} ${last}`);
console.log(getName('KO', 'K yaw GYI'));

//
interface Computer {
    cpu: string,
    ram: string | number,
    ssd: string | number,
    gpu: string | number,
}

const computerOne: Computer = {
    cpu: 'intel core i9 12gen',
    ram: '32gb',
    ssd: '1T',
    gpu: 'RTX 5060'
}
console.log(computerOne);

type Product<data> = {
    data: data;
    price?: string | number,
    amount?: string | number,
}

const product_one: Product<Computer> = {
    data: computerOne,
    price: '1000$',
    amount: '100'
}

const product_two: Product<One> = {
    data: {
        methods: {
            logger: () => {
                console.log('this is logger from product ');
            }
        }
    }
}
product_two.data.methods.logger?.();

type sample = typeof computerOne;

const p3: Product<sample> = {
    data: {
        cpu: 'core 5 ultra',
        ram: '32',
        ssd: '1T',
        gpu: 'RTX 5060'
    },
    price: '999$',
    amount: '4'
}
console.log(p3)

const productName = <T>(products: T[]): [string, string[]] => {
    // @ts-ignore
    return ['Products Name', products.map(product => (product && product.data.cpu) ? product.data.cpu : null)];
}
const [p_name, cpu] = productName([product_one, product_two, p3])
console.log(`${p_name} are ${cpu}`)

//
interface BaseApiResponse<Data> {
    message: string;
    status: number;
    data?: Data;
}

type MovieResponse = {
    movieName: string,
    rate: number,
}
const singleMovieRes1: MovieResponse = {
    movieName: "Three Body Problem",
    rate: 8.8
}

const movieApi: BaseApiResponse<MovieResponse> = {
    message: 'success',
    status: 200,
    data: singleMovieRes1
}
console.log(movieApi)

const userApi: BaseApiResponse<any> = {
    message: 'success',
    status: 200,
    data: {
        name: 'natalia',
        age: 23
    }
}
console.log(userApi)

// 
interface UserInfo {
    name: string,
    age: number,

    getInfo(): void
}

const user1: UserInfo = {
    name: 'John Doe',
    age: 30,
    getInfo: () => {
        console.log(`My name is ${user1.name}. I am ${user1.age} years old.`)
    }
}

const testing = (user: UserInfo): void => {
    user?.getInfo();
}
testing(user1);


// payment (solid) Dependency Injection
/**
 * Represents a PayPal payment service.
 * This interface provides methods for processing payments using PayPal.
 *
 * @interface PayPal
 */
interface PayPal {
    payment: (amount: number) => void,
}

/**
 * The PaymentProcessor class is responsible for handling and processing payments.
 * It implements the PayPal interface and provides functionality to process payment transactions.
 *
 * @implements {PayPal}
 */
class PaymentProcessor implements PayPal {
    payment(amount: number): void {
        console.log(`payment amount is ${amount}`);
    }
}

/**
 * Processes a payment using the specified payment processor and amount.
 *
 * @param {PaymentProcessor|PayPal} processor - The payment processor instance to handle the payment.
 * @param {number} amount - The amount to be processed for the payment.
 */
const somethingPayment = (processor: PaymentProcessor | PayPal, amount: number) => {
    processor.payment(amount);
}

/**
 * An instance of the PayPal payment processing method.
 *
 * @property {Object} paypal - Represents the PayPal payment object.
 * @property {function} paypal.payment - A method to process a payment using PayPal.
 * @param {number} amount - The payment amount to be processed.
 */
const paypal: PayPal = {
    payment(amount: number) {
        console.log('Paypal  :', amount);
    }
}

somethingPayment(new PaymentProcessor(), 10000);
somethingPayment(paypal, 500);


//
interface Song {
    name: string,
    artist: string,
    album: string,
    genre: string,
    year: number,

    songInfo(): string
}

const song1: Song = {
    name: 'song 1',
    artist: 'artist 1',
    album: 'album 1',
    genre: 'genre 1',
    year: 2021,
    songInfo: () => {
        return `song name is ${song1.name} and artist is ${song1.artist}`
    }
}
console.log(song1.songInfo());

//

interface Animal {
    sleep(): void;

    eat(): void;
}

interface Cat {
    catching: () => void,
}

interface Dog {
    bark(): void,
}

interface MyCat extends Readonly<Cat>, Animal, Dog {
}

type sampleAnimal = Readonly<Animal> & Cat | Dog;

const myMonster1: sampleAnimal = {
    sleep() {
        console.log('sleep')
    },
    eat() {
        console.log('eat')
    },
    catching() {
        console.log('catching')
    },
    bark() {
        console.log('bark')
    }
}

console.log(myMonster1)

const myMonster2: MyCat = {
    sleep() {
        console.log('sleep')
    },
    eat() {
        console.log('eat')
    },
    catching() {
        console.log('catching')
    },
    bark() {
        console.log('bark')
    }
}

type CC = keyof typeof myMonster2; // Initial type: "catching" | "sleep" | "eat" | "bark"
type DD = typeof myMonster1; // Initial type: Animal & Cat & Dog

//
for (let key in myMonster2) { //for in loop for OBJ
    //@ts-ignore
    console.log(`${key} : ${myMonster2[key]}`);
}

for (let value of [1, 22, 32, 4]) {
    console.log(value)
}

type MyReadOnly<T> = {
    readonly [k in keyof T]: T[k]
}

type as = {
    name: string,
    age: number
}
const as1: MyReadOnly<as> = {
    name: 'natalia',
    age: 23
}
// as1.name = 'natalia 2'; // TS2540: Cannot assign to name because it is a read-only property.

// template v-for="item in items" vue-js

// interface merge|extension and re-opening

// #merge or extension
interface MovingObject {
    move(): void;
}
interface MovingObject {
    up:()=>void;
}

const direction :MovingObject = {
    move: () => {
        console.log('moving');
    },
    up: () => {
        console.log('up');
    }
}

interface MovingObject2 extends MovingObject{
    down():void
}

const direction2:MovingObject2 = {
    move: () => {
        console.log('moving');
    },
    up: () => {
        console.log('up');
    },
    down: () => {
        console.log('down');
    }
}

// interface re-opening
interface MovingObject3 {
    move(): void;
}
interface MovingObject3 {
    up:()=>void;
}
interface MovingObject3 {
    down:()=>void;
}
const direction3:MovingObject3 = {
    move: () => {
        console.log('moving');
    },
    up: () => {
        console.log('up');
    },
    down: () => {}
}