__## Typescript 03/25

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

🚀 Key Takeaways
✔️ as const makes values deeply immutable.
✔️ It infers literal types instead of broader types.
✔️ It helps prevent accidental modifications and ensures type safety.

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

### Example: Using `readonly` with Tuples and Objects

This example demonstrates the use of `readonly` with tuples and objects in TypeScript. It defines an `ApiData` type for API responses and a `fetchApi` function that returns a `readonly` tuple (`ApiResponse`). The tuple contains a message string and an object with `name` and `status` properties. The `readonly` keyword ensures that the returned tuple cannot be modified, promoting immutability and type safety.

Key points:

- `readonly` prevents modification of tuple elements.
- The `fetchApi` function processes an API response and returns a structured, immutable tuple.
- Destructuring is used to extract the message and data from the tuple.

This approach ensures that the API response remains immutable, reducing the risk of unintended changes and improving code reliability.

🎯🎯🎯 Key Takeaways

Tuples have fixed types and lengths.

By default, tuple elements can be modified in place.

Adding readonly ensures the tuple cannot be changed after creation.

Immutability leads to better safety, predictability, and optimizations in code.

```typescript
type ApiData = {
  data: {
    name: string;
    status: boolean;
  };
  message: string;
};

type ApiResponse = readonly [
  string,
  { readonly name: string; readonly status: boolean }
];

const fetchApi = (response: ApiData): ApiResponse => {
  return [
    response.message,
    { name: response.data.name, status: response.data.status },
  ];
};

const [message, data] = fetchApi({
  data: { name: "test name", status: true },
  message: "success",
});
console.log(message);
console.log(data.name, data.status);
```

### Example: Using Enums in TypeScript

This example demonstrates the use of enums in TypeScript to represent a set of named constants. The `GamePoint` enum is defined with three possible values: `WIN`, `LOSE`, and `DRAW`, each associated with a numeric value. A function `calcPoint` is implemented to calculate the total points based on the current game result and the existing total points. The function returns a tuple containing a descriptive string and the updated total points.

Key points:

- Enums provide a way to define a collection of related constants with meaningful names.
- The `GamePoint` enum improves code readability and type safety by replacing magic numbers with descriptive names.
- The `calcPoint` function demonstrates how to use enums in calculations and return structured data using tuples.

### Summary and Conclusion

Enums in TypeScript are a powerful feature for defining a set of named constants, making the code more readable and maintainable. By using enums, developers can avoid hardcoding values and reduce the risk of errors caused by using incorrect or inconsistent values. The `calcPoint` function showcases how enums can be integrated into calculations and combined with tuples to return structured and meaningful results. This approach enhances code clarity, type safety, and overall reliability.

#### Conclusion

enum is a great feature in TypeScript for defining named constants.

Numeric enums support auto-increment and reverse mapping.

String enums are more readable but don’t support reverse mapping.

Union types ("Admin" | "User") can sometimes be a better alternative.

```typescript
enum GamePoint {
  WIN = 3,
  LOSE = 0,
  DRAW = 1,
}

const calcPoint = (point: GamePoint, totalPoint: number): [string, number] => {
  return ["total point", totalPoint + point];
};
const [myRes, total] = calcPoint(GamePoint.WIN, 44);
console.log(`My team ${myRes} : ${total}`);
```

### Example: Abstract Classes and Inheritance in TypeScript

This example demonstrates the use of abstract classes and inheritance in TypeScript. The `Phone` abstract class serves as a blueprint for creating specific phone models, such as the `Iphone` class. Key features include public, protected, and private access modifiers, as well as methods for encapsulating and managing data.

Key points:

- The `Phone` class defines common properties (`brand`, `model`, `make`) and methods (`spec`, `getMake`, `setBrand`) for all phone types.
- The `Iphone` class extends `Phone`, adding a `price` property and a `logBrand` method.
- Access modifiers (`public`, `protected`, `private`) control the visibility and accessibility of class members.
- The `readonly` modifier ensures that certain properties, like `model`, cannot be modified after initialization.
- The `spec` method showcases how to access and display class properties, while the `setBrand` method demonstrates encapsulation by allowing controlled updates to the `brand` property.

### Summary and Conclusion

Abstract classes in TypeScript provide a powerful way to define reusable and extensible class structures. By using inheritance, developers can create specialized classes that build upon the functionality of abstract classes. This approach promotes code reuse, maintainability, and type safety.

#### Conclusion

- Abstract classes define a blueprint for derived classes.
- Access modifiers (`public`, `protected`, `private`) and `readonly` enhance encapsulation and data integrity.
- Inheritance allows for extending functionality while maintaining a clear and organized codebase.
- This example highlights the importance of object-oriented principles in TypeScript for building scalable and maintainable applications.

```typescript
abstract class Phone {
  public brand: string;
  protected readonly model: number;
  private make: string = "china";

  public spec() {
    console.log(`
            Phone brand :${this.brand} ,
            PhoneMOdel :${this.model} ,
            Make by :${this.make}
            `);
  }

  constructor(brand: string, model: number, make?: string) {
    this.brand = brand;
    this.model = model;
    this.make = make ?? this.make;
  }

  public getMake() {
    return this.make;
  }

  public setBrand(brand: string) {
    this.brand = brand;
  }
}

class Iphone extends Phone {
  price: string | number;
  constructor(
    brand: string,
    model: number,
    price: string | number,
    make?: string
  ) {
    super(brand, model, make);
    this.price = price;
  }
  logBrand() {
    console.log(this.model);
  }
}
const iPhone_13 = new Iphone("Apple", 13, "700$");
iPhone_13.setBrand("samsumg");

iPhone_13.spec?.();
console.log(iPhone_13);

type IPhone = typeof iPhone_13;
const myPhone: IPhone = new Iphone("mac", 14, "1000", "USA");
console.log(myPhone);
```

### Example: Using Interfaces and Type Composition in TypeScript

This example demonstrates the use of interfaces and type composition in TypeScript to define and implement structured and reusable code. The `Log` interface specifies optional methods (`logger` and `print`) for logging and printing functionality. The `Methods` type is a generic type that accepts a type parameter `T` and defines a `methods` property of type `T`. The `One` type is created by combining the `Methods` type with the `Log` interface.

Key points:

- The `Log` interface defines a contract for objects that may include `logger` and `print` methods.
- The `Methods` type uses generics to create a flexible structure for defining method containers.
- The `One` type combines the `Methods` type with the `Log` interface, creating a reusable and extensible type.
- The `one` object implements the `One` type, providing concrete implementations for the `logger` and `print` methods.
- The `as const` assertion ensures that the `one` object is deeply immutable, preventing accidental modifications.

### Summary and Conclusion

This example highlights the power of interfaces and type composition in TypeScript for creating flexible and reusable code structures. By combining interfaces with generics, developers can define precise contracts and enforce type safety. The use of `as const` further enhances immutability, ensuring that objects remain consistent and predictable.

#### Conclusion

- Interfaces define contracts for object structures, promoting consistency and type safety.
- Generics enable the creation of flexible and reusable types.
- Type composition allows for combining multiple types into a single, cohesive structure.
- Immutability with `as const` ensures data integrity and prevents unintended changes.
- This approach is ideal for building scalable and maintainable TypeScript applications.

```typescript
interface Log {
  logger?: () => void;
  print?(): void;
}

type Methods<T> = {
  methods: T;
};

type One = Methods<Log>;

const one: One = {
  methods: {
    logger: () => {
      console.log("this is logger ");
    },
    print() {
      console.log(`this is print methods`);
    },
  },
} as const;

one.methods.logger?.();
one.methods.print?.();

type myNewType = typeof one;
```
