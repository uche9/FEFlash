import React, { useEffect } from 'react'
export default function MyDate(){

    const [second, setSecond]=React.useState(new Date().getSeconds())

    useEffect(()=>{

        setTimeout(()=>{
            setSecond(new Date().getSeconds())
        },1000)
      
    },[second])
    
    let hour=new Date().getHours();
    let minute=new Date().getMinutes();
    

    let x=new Date();
    let day=x.getDay();
    let dayOfMonth=x.getDate();
    let monthOfYear=x.getMonth();
    let Year=x.getFullYear();
    let Day;
    
    switch(day){
   
        case 0:
        Day="Sunday";
        break;
   
        case 1:
        Day="Monday";
        break;
   
        case 2:
        Day="Tuesday";
        break;
   
        case 3:
        Day="Wednesday";
        break;
        
        case 4:
        Day="Thursday";
        break;
   
        case 5:
        Day="Friday";
        break;
   
        case 6:
        Day="Saturday";
        break;
        
        default:
        Day="Happy Day";
    }

    
     
    return(
        <div >
            
                <div style={{fontSize:'13px'}}className="date--container"> 
                     <p> {Day } {dayOfMonth +"-"}{monthOfYear+1 +"-"}{Year} </p>
                        <br/>
                    <p> {hour >12 ? hour-12: hour} : {minute<9? `0${minute}`:minute}:{second<9? `0${second}`: second} {hour>=12 && minute>0 ? "PM": "AM"} </p>
                </div> 
        </div>
    )
   }

 