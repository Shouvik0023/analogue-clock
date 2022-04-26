import React from 'react'
import "../css/clock.css"

function Clock() {
   

    setInterval(() => {

        const hours= document.querySelector("#hour")
        const minutes =document.querySelector("#minute")
        const seconds = document.querySelector("#second")
        
          let d= new Date();
            let htime=d.getHours();
            let mtime=d.getMinutes();
            let stime=d.getSeconds();
             const hrotation = 30*htime + mtime/2 ;
             const mrotation = 6*mtime;
             const srotation = 6*stime;
              
            hours.style.transform = `rotate(${hrotation}deg)`
            minutes.style.transform = `rotate(${mrotation}deg)`
            seconds.style.transform = `rotate(${srotation}deg)`

             
            
    },1000);
  return (
      <>
    <div className='container'  >
       
       <div className="dial">
      
       <div id="hour" ></div>
     <div id="minute" ></div>
     <div id="second"></div>
       </div>
     <div id="center"></div>
      
    </div>
  
     </>
  )
}

export default Clock