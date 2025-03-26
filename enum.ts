// Enums 

enum GamePoint {
    WIN = 3,
    LOSE = 0,
    DRAW = 1,
}

const calcPoint = (point: GamePoint, totalPoint: number): [string, number] => {
    return ['total point', totalPoint + point]
};
const [myRes, total] = calcPoint(GamePoint.WIN, 44);
console.log(`My team ${myRes} : ${total}`); "✅✅✅"

console.log(GamePoint[1]);
console.log(GamePoint[0]);

// 

enum Roles {
    user,
    admin,
    superAdmin
}

console.log(Roles.user);  // 0
console.log(Roles[0]);    // user

console.log(Roles.user === 0 ? 'you acc is user' : ' your acc not user');
const myType: 'superAdmin' = 'superAdmin'
if (Roles[2] == myType) {
    console.log('SA');
}

// 
enum Staus {
    FAIL = 'fail',
    SUCCESS = 'sucess',
    PENDING = 'pending',
    REJECT = 'reject'
}

console.log(Staus['FAIL']);     // fail []notation
console.log(Staus.FAIL);        // fail . notation
// String enums are more readable but don’t support reverse mapping.
