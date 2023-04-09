import './App.css';
import React, { createContext, useState } from 'react'
import InputBox from './Componets/InputBox';
import OutputBox from './Componets/OutputBox';

export const GlobalContext=createContext();
function App() {
  // console.log('hello');
const[currList,setCurrList]=useState([]);
const [currValue,setCurrValue]=useState('');
const [edit,setEdit]=useState(0)
  return (
    <div className="App">
       <GlobalContext.Provider value={{currList,setCurrList,currValue,setCurrValue,edit,setEdit}}>
     <div className='mainConteiner'>
      <InputBox/>
      <OutputBox/>
     </div>
   </GlobalContext.Provider>
    </div>
  );
}

export default App;
