import React, { useContext } from 'react'
import { GlobalContext } from '../App'
import '../CSS_files/OutputBox.css'

const OutputBox = () => {
    const{currList,setCurrList,setCurrValue,edit,setEdit}=useContext(GlobalContext);

    const deleteHandeler=(id)=>{
       
        const deleteValue = currList.filter((ele)=>{
            return ele.id !== id
        })
        setCurrList(deleteValue)
        // console.log(currList);  
    }
    const editHandeler=(id)=>{
        const editValue = currList.filter((ele)=>{
            return ele.id === id
        })
        // console.log(editValue[0].currValue);
        setCurrValue(editValue[0].currValue)
        setEdit(id)
        
    }
  return (
    <>
    <div className='outbox'>
        {currList.map((e,i)=>{
            return<>
            <div key={i} className='result'>
                <input type="checkbox" name="" id="checkbox1" />
                <h2>{e.currValue}</h2>
                <button onClick={()=>{
                    editHandeler(e.id)
                }}>edit</button>
                <button onClick={()=>{
                    deleteHandeler(e.id)
                }}>delete</button>
            </div>
            </>
        })  }
       
    </div>
    </>
  )
}

export default OutputBox