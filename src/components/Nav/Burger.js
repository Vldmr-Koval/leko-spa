import React, { useState, useEffect } from 'react';
import RightNav from './RightNav';


const Burger = () => {
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    (open) ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
    
    return 
  }, [open])
  
  return (
    <>
      <div className={open ? "burger active" : "burger"} onClick={() => setOpen(!open)}>
       {/* TODO: переробити в span + before */}
        <div />
        <div />
        <div />
      </div>
      { open ? <RightNav setOpen={setOpen}/> : <></> }
    </>
  )
}

export default Burger