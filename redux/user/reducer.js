const intialState = {
    user: 'test'
}

export default (state = intialState, action) => {
    switch (action.type) {
        case 'SETUSER':
            return {
                ...state,
                user: action.payload
            };
        default: return state
    }
}