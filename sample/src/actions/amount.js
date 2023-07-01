export const INCREMENT = 'account/increment';
export const DECREMENT = 'account/decrement';
export const INCREMENT_BY_AMOUNT = 'account/incrementByAmount';

//action creator 
export function incrementAmount(){
    return {type:INCREMENT}
} 

export function decrementAmount() {
    return {type:DECREMENT}
}

export function incrementByAmount(value) {
    return {type:INCREMENT_BY_AMOUNT, payload:value}
}