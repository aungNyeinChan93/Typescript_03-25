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
    movieName:string,
    rate: number,
}
const singleMovieRes1:MovieResponse ={
    movieName:"Three Body Problem",
    rate:8.8
}

const movieApi:BaseApiResponse<MovieResponse> ={
    message:'success',
    status:200,
    data:singleMovieRes1
}
console.log(movieApi)

const userApi:BaseApiResponse<any> ={
    message:'success',
    status:200,
    data:{
        name:'natalia',
        age :23
    }
}
console.log(userApi)




