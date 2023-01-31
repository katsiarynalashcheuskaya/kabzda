type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const AccordionReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {...state, collapsed: !state.collapsed};
        default:
            throw new Error('Check action type');
    }
}