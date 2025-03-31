export enum Score {
    win = 3,
    lose = 0,
    draw = 1,
}

const point = <T>(matchPoint: T, totalPoint: T): T => {
    // @ts-ignore
    return totalPoint + matchPoint;
}

console.log(point<number>(Score.win, 45));


// oop
interface Chapter {
    lesson(chapter: any): void
}

abstract class English implements Chapter {

    protected constructor(protected language: string) { };

    abstract information(language: string): void;

    abstract add(num: number, num2: number): number;

    protected about(): void {
        console.log('this is about ');
    }

    lesson(chapter: unknown): void {
        console.log(`Chapter : ${chapter}`);
    }

    skill(skill: string): void {
        console.log(skill);
    }
    
}

export class Subject extends English {
    private readonly lvl: string;
    constructor(language: string, lvl: string) {
        super(language);
        this.lvl = lvl
    }
    public information(): void {
        console.log(`this lang : ${this.language}. Level - ${this.lvl}`);
        this.about();
    }
    // method overwrite :polymo
    lesson(chapter: unknown): void {
        console.log(`Over writing the origin method by child :${chapter}`);
    }

    add(num: number, num2: number): number {
        return num + num2
    }

    // add(str:string,str2:string):string{
    //     return str+str2;
    // }

}

const myEngClass = new Subject('english ', 'level-3')
myEngClass.information?.();
myEngClass.lesson('chapter-11')
