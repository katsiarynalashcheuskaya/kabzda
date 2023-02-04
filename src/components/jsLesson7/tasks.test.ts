import {StateType} from "../UncontrolledAccordion/AccordionReducer";
import {ActionSalaryType, salaryReducer, salaryStateType} from "./tasks";

test ('case sum of salaryReducer', ()=>{
    const salary: salaryStateType = 800
    const action: ActionSalaryType = {
        type: 'SUM',
        n: 200
    }
        const testAction: ActionSalaryType = {
            type: 'TEST',
            n: 200
        }
        const result = salaryReducer(salary, action)

    expect(result).toBe(1000)
    expect(salaryReducer(salary, testAction)).toBe(800)
})
test ('case sub of salaryReducer', ()=>{
    const salary: salaryStateType = 800
    const action: ActionSalaryType = {
        type: 'SUB',
        n: 200
    }
    const testAction: ActionSalaryType = {
        type: 'TEST',
        n: 200
    }
    const result = salaryReducer(salary, action)

    expect(result).toBe(600)
    expect(salaryReducer(salary, testAction)).toBe(800)
})
test ('case div of salaryReducer', ()=>{
    const salary: salaryStateType = 800
    const action: ActionSalaryType = {
        type: 'DIV',
        n: 200
    }
    const testAction: ActionSalaryType = {
        type: 'TEST',
        n: 200
    }
    const result = salaryReducer(salary, action)

    expect(result).toBe(4)
    expect(salaryReducer(salary, testAction)).toBe(800)
})
test ('case mult of salaryReducer', ()=>{
    const salary: salaryStateType = 800
    const action: ActionSalaryType = {
        type: 'MULT',
        n: 2
    }
    const testAction: ActionSalaryType = {
        type: 'TEST',
        n: 200
    }
    const result = salaryReducer(salary, action)

    expect(result).toBe(1600)
    expect(salaryReducer(salary, testAction)).toBe(800)
})