// objects

const category1: { name: string, desc: string, create_at: string } = {
    name: 'My Category 1',
    desc: 'desc category',
    create_at: new Date().toLocaleDateString()
}
console.log(category1);

// category
interface Category {
    id: number,
    name: string,
}

const book: Category = { id: 1, name: 'book category' };
const phone: Category = { id: 2, name: 'phone category' };
const laptop: Category = { id: 3, name: 'laptop category' };
const iphone: Category = { id: 4, name: 'iphone category' };

type Categories = Category[];
const categories: Categories = [book, phone, laptop];
categories.push(iphone);

const printOutCategory = (category: Category): void => {
    console.log(` ${category.id} : Category name is ${category.name}`);
}
const printOutCategories = (categories: Categories): void => {
    categories.forEach(category => {
        printOutCategory(category);
    })
}
printOutCategories(categories)

// union type with type
type BigBoolean = true | false | 0 | 1 | 'true' | 'false' | 'on' | 'off' | null | 'success' | 'fail' | 'pending';
const myStatus: BigBoolean = null;
console.log(myStatus);


// object
type Post = {
    name: string,
    description: string,
    url?: string,
    category_id?: number
}

const post_one: Post = {
    name: 'post one',
    description: 'post one desc',
    url: 'post one url',
    category_id: 1
}
const post_two: Post = {
    name: 'post two',
    description: 'post two desc',
    category_id: 2
}
const postName = (posts: Post[] = [post_one]): (string | undefined)[] => {
    return posts?.map(post => post?.url)
}
const post_name_res = postName([post_one, post_two, post_one])
console.log(post_name_res);

// useDouble();
const useDouble = (num: number): [number, any] => {
    const double = (num: number) => num * num;
    return [num, double]
}
const [number, setDouble] = useDouble(199);
const squareNUmber = setDouble(number)
console.log(`My origin number is ${number}. Square value :${squareNUmber}`,);


// Literal Type
let myNumber: 1 | 2 | 3;
myNumber = 3
// myNumber = 4  //Type '4' is not assignable to type '1 | 2 | 3'

let myString: "one" | "two" | "three";
myString = 'one';
// myString = 'four'        // Type '"four"' is not assignable to type '"one" | "two" | "three"'

let myBoolean: true;
// myBoolean = false        // Type 'false' is not assignable to type 'true'

type LiteralType = "one" | 1 | true;
let myLiteralType: LiteralType = "one";
// myLiteralType = 2        // Type '2' is not assignable to type 'LiteralType'



