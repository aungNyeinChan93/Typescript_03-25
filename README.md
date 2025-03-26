## Typescript 03/25

### Example: type

```typescript
type User = {
  name: string;
};

const user: User = {
  name: "anc",
};
```

### Example: Working with Optional Properties and Arrays

```typescript
type Post = {
  name: string;
  description: string;
  url?: string;
  category_id?: number;
};

const post_one: Post = {
  name: "post one",
  description: "post one desc",
  url: "post one url",
  category_id: 1,
};
const post_two: Post = {
  name: "post two",
  description: "post two desc",
  category_id: 2,
};
const postName = (posts: Post[] = [post_one]): (string | undefined)[] => {
  return posts?.map((post) => post?.url);
};
const post_name_res = postName([post_one, post_two, post_one]);
console.log(post_name_res);
```

### Example: Using a Tuple with a Function

```typescript
const useDouble = (num: number): [number, any] => {
  const double = (num: number) => num * num;
  return [num, double];
};
const [number, setDouble] = useDouble(199);
const squareNUmber = setDouble(number);
console.log(`My origin number is ${number}. Square value :${squareNUmber}`);
```

### Example: Union Type with type

```typescript
type BigBoolean =
  | true
  | false
  | 0
  | 1
  | "true"
  | "false"
  | "on"
  | "off"
  | null
  | "success"
  | "fail"
  | "pending";
const myStatus: BigBoolean = null;
console.log(myStatus);
```

### Example: Nested Array

```typescript
const nestedArray: (number | string)[][] = [
  [1, 2, 3, 4],
  [1, "adfa", 3],
  ["koko", "mumu", "susu"],
];
console.log(nestedArray);
```

### Example: Destructuring a Readonly Tuple

```typescript
type Multi = readonly [string, boolean, string[], any[], null];
const multiArray: Multi = [
  "arsenal",
  false,
  ["henry", "van persie"],
  [405, 333],
  null,
];
const [clubName, EPL, MVP, TotalGoals, UCL] = multiArray;
console.log("clubName: " + clubName);
console.log("EPL- 2008-2025 : " + EPL);
console.log("MVP: " + MVP);
console.log("TotalGoals: " + TotalGoals);
console.log("UCL: " + UCL);
```

### Example: Using `readonly` and `as const` with Objects

This example demonstrates the use of `readonly` properties and the `as const` assertion in TypeScript. It defines a `Game` type with a `readonly` property `type`, ensuring that the `type` field cannot be modified after initialization. The `as const` assertion is used to make the object literals immutable. A function `favGame` is also implemented to return a tuple containing a string and an array of game names.

```typescript
type Game = {
  name: string;
  readonly type: string;
};

const coc: Game = { name: "coc", type: "Strategy " } as const;
const mlbb: Game = { name: "mlbb", type: "moba " } as const;
let dota: Game = { name: "dota", type: "legacy moba " } as const;

dota = { name: "dota2", type: "MOBA" };

const favGame = (games: Game[]): [string, string | undefined[]] => {
  return ["fav-games", games?.map((g) => g?.name)];
};

const [Info, FavGame] = favGame([coc, mlbb, dota]);
console.log(`My ${Info} are ${FavGame}`);
```

### Example : Usage of Never

```typescript
//never
const alertInfo = (message: string): never => {
  throw new Error("This is custome error :" + message);
};
```

### Example Default Parameter

```typescript
// default parameter
const callName = (name: string = "aung"): void => {
  console.log(name);
};
callName?.();
callName?.("koko");
```

### Example: Literal Types in TypeScript

This example demonstrates the use of literal types in TypeScript. Literal types allow you to specify exact values a variable can hold. The code defines variables with specific literal types for numbers, strings, and booleans. It also showcases a custom `LiteralType` that combines multiple literal values. The comments highlight type errors when attempting to assign values outside the defined literals.

Key points:

- `myNumber` can only hold the values `1`, `2`, or `3`.
- `myString` is restricted to `"one"`, `"two"`, or `"three"`.
- `myBoolean` is strictly `true`.
- `myLiteralType` combines a string, a number, and a boolean literal (`"one" | 1 | true`).

This ensures type safety by limiting the possible values for each variable.

```typescript
let myNumber: 1 | 2 | 3;
myNumber = 3;
// myNumber = 4  //Type '4' is not assignable to type '1 | 2 | 3'

let myString: "one" | "two" | "three";
myString = "one";
// myString = 'four'        // Type '"four"' is not assignable to type '"one" | "two" | "three"'

let myBoolean: true;
// myBoolean = false        // Type 'false' is not assignable to type 'true'

type LiteralType = "one" | 1 | true;
let myLiteralType: LiteralType = "one";
// myLiteralType = 2        // Type '2' is not assignable to type 'LiteralType'
```

### Example: Using `as const` for Immutable Objects

This example demonstrates the use of the `as const` assertion in TypeScript to make object properties immutable. The `ApiResponse` object is defined with `as const`, ensuring that its properties cannot be reassigned. A function `changeStatus` attempts to modify the `category` and `status` properties of `ApiResponse`, but TypeScript enforces immutability by throwing errors. This ensures that the object remains read-only and prevents unintended modifications.

Key points:

- `as const` makes all properties of an object immutable.
- Attempting to reassign properties results in a TypeScript error.
- The example highlights the importance of immutability for maintaining data integrity.

```typescript
// as const
const ApiResponse = {
  data: { name: "test api", category: "test category" },
  status: true,
} as const;
const changeStatus = (responses: typeof ApiResponse): [string, boolean] => {
  responses.data.category = "change category name"; // Cannot assign to 'category' because it is a read-only property.
  responses.status = !responses.status; // Cannot assign to 'status' because it is a read-only property.
  return [responses.data.category, responses.status];
};
console.log(changeStatus(ApiResponse));
```
