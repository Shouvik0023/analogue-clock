import React from 'react'
import "../css/clock.css"

function Clock() {

    setTimeout(() => {
        
          let d= new Date();
            let htime=d.getHours();
            let mtime=d.getMinutes();
            let stime=d.getSeconds();
            console.log(htime)
            console.log(mtime)
    },1000);
  return (
      <>
    <div className='container' style={{backgroundColor : "red"}} >
       <div className="dial">
       <div id="hour" ></div>
     <div id="minute"></div>
     <div id="seconds"></div>
       </div>
      
    </div>
  
     </>
  )
}

export default Clock