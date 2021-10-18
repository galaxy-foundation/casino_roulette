const initState = {
    sessionState: false
}

const sessionReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_SESSIONSTATE':
            return {
                ...state,
                sessionState: action.payload
            }
        default:
            return state    
    }
}

export default sessionReducer;