type User = {
    name: string
    age?: number
};

const user: User = {
    name: 'anc',
    age: 22
}
console.log(user);

const players: string[] = ['ronaldo', 'messi', 'kaka',]
console.log(players[0]);


// arrow function
const add = (a: number, b: number): number => {
    return a + b;
}
const res = add(3, 4);
console.log(res);

// default parameter
const callName = (name: string = 'aung'): void => {
    console.log(name);
}
callName?.();
callName?.('koko');

// return number
const double = (x: number = 2): number => x * x;
console.log(double(3));

// void
const info = (user: User): void => console.log(`My name is ${user?.name}. I'm ${user?.age} years old`);
info(user);

//never 
const alertInfo = (message: string): never => {
    throw new Error("This is custome error :" + message);
}
// alertInfo('runtime error');

// array 1
const clubs = (clubs: Array<string>): Array<string> => {
    return clubs.map(c => c);
}
const footballClubs = clubs(['manu', 'spa', 'man_city', 'arsenal']);
console.log(footballClubs);

// array 2
const footballPlayers = (players: string[]): string[] => {
    return players.map(p => p);
}
const myFavPlayers = footballPlayers(['ronaldo', 'bale', 'beckham', 'ronaldinho', 'ronney'])
console.log(myFavPlayers);

// array |tuple 3
type Game = {
    name: string,
    readonly type: string
}
const coc: Game = { name: 'coc', type: "Strategy " } as const;
const mlbb: Game = { name: 'mlbb', type: "moba " } as const;
let dota: Game = { name: 'dota', type: "legacy moba " } as const;

console.log(dota = { name: 'dota2', type: 'MOBA' });  // { name: 'dota2', type: 'MOBA' }

const favGame = (games: Game[]): [string, string[]] => {
    return ['fav-games', games.map(g => g.name)]
};
const [Info, FavGame] = favGame([coc, mlbb, dota]);
console.log(`My ${Info} are ${FavGame}`);


// multi Dimensional array

// const multiArray: readonly [string, boolean, string[], any[], null] = ['arsenal', false, ['henery', 'van-percy'], [405, 333], null];
type Multi = readonly [string, boolean, string[], any[], null];
const multiArray: Multi = ['arsenal', false, ['henery', 'van-percy'], [405, 333], null];
console.log(multiArray);

const [clubName, UCL, MVP, TotalGoals, EPL] = multiArray;
console.log("clubName: " + clubName);
console.log("UCL: " + UCL);
console.log("MVP: " + MVP);
console.log("TotalGoals: " + TotalGoals);
console.log("EPL- 2008-2025 : " + EPL);

// nested array
const nestedArray: (number | string)[][] = [[1, 2, 3, 4,], [1, 'adfa', 3], ['ko', 'mumu', 'susu']]
console.log(nestedArray);














