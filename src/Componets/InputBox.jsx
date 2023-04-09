import React, { useContext } from 'react'
import { GlobalContext } from '../App'
import '../CSS_files/InputBox.css'

const InputBox = () => {
    const {currList,setCurrList,currValue,setCurrValue,edit,setEdit}=useContext(GlobalContext)
    // console.log(edit);
  return (
    <>
    <div className="inputdiv">
        <input type="text" name="" id="" value={currValue} onChange={(e)=>{
            setCurrValue(e.target.value)
        }} />
        {/* <button onClick={()=>{
           
          if(currValue !== ''){
            setCurrList([...currList,{currValue:currValue,id:`${currValue}${Date.now()}`}])
            setCurrValue('')
          }

        }}>click</button> */}
        {edit? <button onClick={()=>{
          const editValue=currList.filter((ele)=>{
            return ele.id === edit
          })
          // console.log(editValue);
          // console.log(currList);
          const finalEdit=currList.map((e)=>
           e.id===editValue.id ? (e={id:e.id,currValue:e.currValue}):{id:e.id,currValue}
          )
          console.log(finalEdit);
          setCurrList(finalEdit)
          setEdit(0)
          setCurrValue('')
        }}

        >edit</button> : <button onClick={()=>{
           
          if(currValue !== ''){
            setCurrList([...currList,{currValue:currValue,id:`${currValue}${Date.now()}`}])
            setCurrValue('')
          }

        }}

        >go</button>}
    </div>
    </>
  )
}

export default InputBox