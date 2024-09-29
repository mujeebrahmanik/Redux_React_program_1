import React from 'react'
import './counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../redux/Reducer/Reducer'

function Counter() {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div className='counter'>
        <h1 className='title'>Redux counter app</h1>
        <h3 className='count'>count : {count} </h3>
        <div className='buttons'>
            <button className='inc' onClick={()=>dispatch(increment())}>Increment</button>
            {
                count>0?
                <button className='dnc' onClick={()=>dispatch(decrement())}>Decrement</button>
                :null

            }
        </div>
    </div>
  )
}

export default Counter