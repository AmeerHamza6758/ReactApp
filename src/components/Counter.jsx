import React,{useState} from 'react'
import { toast } from 'react-toastify';

function Counter() {
    const [counter,setCounter]=useState(0);
    const add=()=>{
        if(counter>=10){
           
            toast.dark("YOU cannot enter more than 10")
            setCounter(10)
        }else{
        setCounter(counter+1);

        }
    }
    const subtract=()=>{
        if(counter>=0){
            toast.dark("YOU cannot enter less than 0")
            setCounter(0)
        }else{
        setCounter(counter-1);

        }
    }
  return (
    <div className='d-flex'>
      <button className='btn btn-primary' onClick={add}>+</button>
      <h1>{counter}<i className="fa-solid fa-truck text-warning"></i></h1>
      <button className='btn btn-danger' onClick={subtract}>-</button>
    </div>
  )
}

export default Counter
