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
console.log(getName('KO', 'Kyaw GYI'));


