import {useReducer} from "react";

/*type ActionSalaryType = ReturnType<typeof sumAC> |
    ReturnType<typeof subAC> |
    ReturnType<typeof divAC> |
    ReturnType<typeof multAC>*/


export type ActionSalaryType = {
    type: 'SUM' | 'TEST' | 'SUB' | 'DIV' | 'MULT',
    n: number
}
/*export const subAC = (n: number) => {
    return {
        type: 'SUB',
        payload: n
    } as const
}
export const divAC = (n: number) => {
    return {
        type: 'DIV',
        payload:n
    } as const
}
export const multAC = (n: number) => {
    return {
        type: 'MULT',
        payload: n
    } as const
}*/

export type salaryStateType = number

export const salaryReducer = (state: salaryStateType, action: ActionSalaryType): salaryStateType => {
    switch (action.type) {
        case 'SUM':
            return state + action.n
        case 'SUB':
            return state - action.n
        case 'DIV':
            return state / action.n
        case 'MULT':
            return state * action.n
        default:
            return state
    }}


/*
function sum (salary: number, n: number) { stateSalDispatch(sumAC(n))}
export const sub = (salary: number, n: number) => { stateSalDispatch(subAC(n))}
export const div = (salary: number, n: number) => { stateSalDispatch(divAC(n))}
export const mult = (salary: number, n: number) => { stateSalDispatch(multAC(n))}*/
