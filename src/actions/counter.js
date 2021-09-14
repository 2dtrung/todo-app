export const increase = (number) => {
    return {
        type: 'INCREASE_COUNTER',
        payload: number,
    }
}

export const decrease = (number) => {
    return {
        type: 'DECREASE_COUNTER',
        payload: number,
    }
}