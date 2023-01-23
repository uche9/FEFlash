import React, {useEffect} from 'react'



export default function Niche() {

    
    const [obj,setObj]=React.useState({x:6});
    
    useEffect( ()=>{

            setTimeout(()=>{

                setObj(prevObj=>({
                    x: ((prevObj.x+1))%700,
                    
                   
                }))

                           } ,10)

    } ,[obj])

    

    const styles={
        paddingLeft:`${obj.x}px`,
        paddingTop:`${obj.y}px`, 
    }



    return(
        <div >
             <p style={styles}className='select--niche-text' > Please select news by niche...</p>
        </div>
    )
}