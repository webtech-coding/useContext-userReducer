import { createContext, useReducer } from 'react'

import { reducer, initialState } from './store'
import './App.css'
import CounterApp from './CounterApp';

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);  

  return (
   <AppContext.Provider value={{state, dispatch}}>
      <CounterApp />
   </AppContext.Provider>
  )
}

export default App
