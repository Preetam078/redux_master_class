export const INNCREMENT_BONUS = 'bonus/increment';
export const DECREMENT_BONUS ='bonus/decrement';


//action creator
export function incremenrBonus() {
    return {type:INNCREMENT_BONUS}
}

export function decrementBonus() {
    return {type:DECREMENT_BONUS}
}