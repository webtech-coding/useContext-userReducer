export const initialState={
    count:0
}

export const reducer=(state, action)=>{
    switch(action.type){
        case 'INCREASE_NUMBER':
                return {count:state.count +1}
        case 'DECREASE_NUMBER':
            return {count:state.count - 1}
        default:
            return state
    }
}



