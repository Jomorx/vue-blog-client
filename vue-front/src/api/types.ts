export interface ReturnType<T>{
    code:number,
    data:T[],
    message:string
}
export interface ReturnPageType<T>{
    code:number,
    data:{
        count:number,
        rows:T[]
    },
    message:string
}