export default function useNumber(): { myNumber: number; funName: string } {
    const myNumber = 10;
    const funName = 'useNumber';
    return { myNumber, funName };
}