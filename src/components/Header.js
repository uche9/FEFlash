
import React, {useEffect } from 'react'
//import flash from '../logo/flash.png'

export default function Header(){

    //Animating 'Flash news network'
    const [obj_01,setObj_01]=React.useState({
        x:10,
        y:10});
    
    useEffect( ()=>{

            setTimeout(()=>{

                setObj_01(prevObj=>({
                    x: ((prevObj.x+10))%100 ===0 ? 10 :((prevObj.x+2))%100 ,
                    y: (prevObj.y+1)%100===0? 50:(prevObj.y+1)%100,
                   
                }))

                           } ,100)

    } ,[obj_01])

    

    const styles_01={
        fontSize:`${obj_01.x}px`,
        paddingLeft: `${obj_01.y}px`,
        color:'white'
        
    } 

//Animating News headline text
const [w, setw] =React.useState(1) 
const [headline,setHeadline]=React.useState([]);  



useEffect(()=>{
    
let Text=`||Tech:New AI ChatGPT takes over the internet.
|| Economy: AfDB Tips Senegal, Mozambique Ahead Of Nigeria In Gas Investment
|| Politics: Nigerian Elections set for March 2023
|| Migration: Italy and Tunisia seek to address migration setbacks
|| Tech: Apple unveils new iPhones, Apple Watches and AirPods
||Life Style : UNESCO names Senegal as the true home of Jollof Rice over Ghana and Nigeria
|| Tech: Djibouti signs $1bn rocket deal with Hong Kong company
||Fashion:Dakar, Senegal is becoming the new fashion hub in Africa`

  setTimeout(()=>{

    Text=Text.split('');
    setw(w=> (w+1)% (Text.length+1))
    setHeadline(Text.slice(0,w))
  },100)

},[headline,w])

    const styles_02={
        direction:'rtl',
        paddingLeft:'10px',
        paddingRight:'10px',
        textAlign:'right',
        whiteSpace:'nowrap',
        overflow: 'hidden',
        marginLeft:'12px'
    }

    
                  
               

    return(
        <div  id='headline'>
             <h1 className= "header--container"> 
                <span style={styles_01}>Kwick</span> 
                {/*<img src={flash} alt='flash' style={styles_01}></img> */}
                <span style={{fontSize:'20px', fontFamily:'fantasy',color:'red'}}>news network</span>
             </h1>

             <h4 className='container--news--headline' >
                <div style={{textAlign:'center'}}>Headlines:</div>
                <div style={styles_02}>{headline}</div>
            </h4>
        </div>
    )
}
