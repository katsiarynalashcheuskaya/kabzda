import React from "react";
import {AccordionReducer, StateType} from "./AccordionReducer";

test('reducer should change value to opposite value', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = AccordionReducer(state, {type: 'TOGGLE-COLLAPSED'})
    //expectation
    expect(newState.collapsed).toBe(true)
})

test('error', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    //expectation
    expect(()=>{AccordionReducer(state, {type: 'FAKETYPE'})}).toThrowError();
})