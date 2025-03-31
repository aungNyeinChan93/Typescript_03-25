

const useCounter =()=>{
    let count:number = 0;

    const increment = (count:number):number=>{
        return ++count;
    }
    return {count,increment}
}

export default useCounter;
