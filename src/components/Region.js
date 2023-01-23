
import {useState,useEffect} from 'react';

export default function Region(){
 const [region_text, setRegionText] =useState([])  
 const [w, setw] =useState(1) 

 useEffect(()=>{

   setTimeout(()=>{
     
     let Text='... +please +select +region'
     
     Text=Text.split('+');
     setw(w=> (w+1)% (Text.length+1))
     setRegionText(Text.slice(0,w))

     

   },1000)

   

 },[region_text,w])

 return (
    <div className='text--select-region'> {region_text.length? region_text:'Do you want more news?'}</div>
 )

}





