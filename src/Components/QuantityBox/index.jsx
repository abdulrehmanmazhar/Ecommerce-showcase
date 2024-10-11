import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Button from "@mui/material/Button";

function QuantityBox() {
    const [inputVal, setInputVal] = useState(1);
    const minus = ()=>{
        setInputVal(prev=>prev>1?prev-1:prev)
        console.log(inputVal)

    }
    const plus = ()=>{
        setInputVal(prev=>prev+=1);
        console.log(inputVal)
    }
  return (
    <div className="d-flex quantityControl align-items-center">
                  <Button onClick={minus} className="btn-purple-inv"><FaMinus />
                  </Button>
                  <input type="text" name="" id="" value={inputVal} onChange={(e)=>{if (!isNaN(Number(e.target.value))) {setInputVal(Number(e.target.value))} }}/>
                  
                  <Button onClick={plus} className='btn-purple-inv'><FaPlus />
                  </Button>
                </div>
  )
}

export default QuantityBox