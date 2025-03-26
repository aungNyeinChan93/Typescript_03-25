// Tuples

const users = ['mgmg', "susu", 'aungaung'] as const
// users = ['mgmg','susu','aungaung']

let customers: readonly [string, string, "koko"];
// customers = ['mgmg', "susu", 'koko', 'uko'];  
/*
Type '[string, string, string, string]' is not assignable to type '[string, string, string]'.
Source has 4 element(s) but target allows only 3 
*/


type ApiData = {
    data: {
        name: string,
        status: boolean
    },
    message: string
}

type ApiResponse = readonly [string, { readonly name: string, readonly status: boolean }];

const fetchApi = (response: ApiData): ApiResponse => {
    return [response.message, { name: response.data.name, status: response.data.status }]
}

const [message, data] = fetchApi({ data: { name: 'test name', status: true }, message: 'success' });
console.log(message);
console.log(data.name, data.status);


// tuples and types
type myArray = readonly [string, number, number];
const myExps: myArray = ['my Dev experience', 1, 2];
const [myexp, from, to] = myExps
console.log(`${myexp} is ${from} to ${to} years`);

const myExp2: readonly [string, number, number] = ['my forntend exp', 3, 4]
console.log(`${myExp2[0]} is ${myExp2[1]} to ${myExp2[2]} years`);



