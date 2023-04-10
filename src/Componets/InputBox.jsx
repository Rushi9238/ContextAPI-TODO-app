import React, { useContext } from 'react'
import { GlobalContext } from '../App'
import '../CSS_files/InputBox.css'

const InputBox = () => {
  const { currList, setCurrList, currValue, setCurrValue, edit, setEdit } = useContext(GlobalContext)
  // console.log(edit);
  return (
    <>
      <div className="inputdiv">
        <input type="text" name="" id="" value={currValue} onChange={(e) => {
          setCurrValue(e.target.value)
        }} />

        {edit ?
         <button onClick={() => {
          const editValue = currList.filter((ele) => {
            return ele.id === edit
          })
          // console.log(editValue);
          // console.log(currList);
          const finalEdit = currList.map((e) =>
            edit === e.id ? (e = { id: e.id, currValue }) : { id: e.id, currValue: e.currValue }
          )
          console.log(finalEdit);
          setCurrList(finalEdit)
          setEdit(0)
          setCurrValue('')
        }}
        >Edit</button>
         :
          <button onClick={() => {
            if (currValue !== '') {
              setCurrList([...currList, { currValue: currValue, id: `${currValue}${Date.now()}` }])
              setCurrValue('')
            }

          }}

          >ADD</button>}
      </div>
    </>
  )
}

export default InputBox