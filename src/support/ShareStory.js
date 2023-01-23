import React from "react";
import { RWebShare } from "react-web-share";

export default function ShareStory({ headline}){
return (
       <div>
            <RWebShare
            data={{
            text:`${headline}`,
            url:window.location,         
            title:'',
            
            }}
           
            >
            <button  onClick={()=>(document.title='love')}>share story </button>
            </RWebShare>
      </div>
);
};