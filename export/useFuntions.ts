
const useFuntions = ()=>{

    // alert
    const alert =(mess:any)=>{
        alert(mess)
    }

    // log
    const logger = (mess:unknown)=>{
        console.log(mess)
    }

    //

    return{alert,logger}
}

export default useFuntions;