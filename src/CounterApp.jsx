import { useContext } from "react"

import { AppContext } from "./App"
const CounterApp =()=>{

    const {state, dispatch}=useContext(AppContext)
    
    return(
        <div>
             <p>The current counter is: {state.count}</p>
            <div>
                <button onClick={()=>{dispatch({type:'INCREASE_NUMBER'})}}> ADD NUMBER </button>
                <button onClick={()=>{dispatch({type:'DECREASE_NUMBER'})}}> ADD NUMBER </button>
            </div>
        </div>
    )
}

export default CounterApp;