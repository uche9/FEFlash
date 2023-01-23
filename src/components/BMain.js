import AgeFilter from '../support/AgeFilter'

import {Link, Outlet} from 'react-router-dom'
import {useEffect, useState} from 'react'
import news_data from "./news_data";
import  '../styles/Mystyle.css';
import Nichetext from './Niche'
import RegionText from'./Region'
import PathObject from '../routes/RegionRoute'
 
 

 function BMain(){
             
    const [active_region,setActive_Region]=useState(PathObject().region||'World'); 
    const [region_color,setRegion_Color]=useState('green')
    const [active_niche,setActive_Niche]=useState( PathObject().niche || 'All_News'); 
    const [niche_color,setNiche_Color]=useState('green')
    const [active_id,setActive_Id]=useState(PathObject().id );
    const [showfullstory,setShowFullStory]=useState(PathObject().showfullstory);
    
    

    useEffect(()=>{
    
     })
    
    setTimeout(()=>{
      document.getElementById(active_region).style.backgroundColor=region_color;
    },0) 
   
    function RegionNavBar(){
        
      
     function selectRegion(el){
        setActive_Region(el);       
        setRegion_Color('green') 
        setTimeout(()=>{
          document.getElementById(el).style.backgroundColor=region_color;
        },0)    
    } 

         let Regions=[
          'World',
         'Africa',
         'Asia',
         'Australia',
         'Canada',
         'China',
         'Europe',
         'Latin_Ameria',
         'Nigeria',
         'Middle_East',
         'UK',
         'USA'];
       
   
         //Conform Region for routing
      let RegionRoute=Regions.map(el=>({
        way: ('/'+el+'/'+active_niche),
        wayName:el
    }))
             
   let  Region=RegionRoute.map(el=> 
                      <Link to = {el.way}  onClick={()=>selectRegion(el.wayName)} >
                          <button id={el.wayName} className='region--tabs'>
                             {el.wayName}
                          </button>
                      </Link>                  
                           ) 
     
           return(
            <div className="container--region--navbar"> 
                          
        
              {RegionText}                     
                <div className='container--region--tabs'>
                {Region}
                </div>
                  
                         
                 
            </div>
        )
     }
      

     setTimeout(()=>{
      document.getElementById(active_niche).style.backgroundColor=niche_color;
    },0)

  function NicheNavbar(){

    function selectNiche(el){

      if (el==='All_News'){
        window.location.pathname='/World/All_News'
        setActive_Niche('All_News');
        setActive_Region('World');
      }
      else {
        setActive_Niche(el);
      setNiche_Color('green')
      setTimeout(()=>{
        document.getElementById(el).style.backgroundColor=niche_color;
      },0)
      }
            
 }
  let Niches=[ 
            'All_News' ,
             'All_Niche',
             'Business',
             'Economy',
             'Education',
             'Faith', 
             'Fashion',
             'Entertainment',
             'Life_Style',
             'Sports',
             'Politics',
             'Technology',            
            ];
   //Conform Niche routes
   let NicheRoute=Niches.map(el=>({
    way: '/'+active_region+'/'+el,
    wayName:el
}))
    
     

let  Niche=NicheRoute.map(el=> 
  
      <Link to = {el.way} className="niche--tabs" onClick={()=>selectNiche(el.wayName)}  > 
             <button id={el.wayName} className='niche--tabs'>
                  {el.wayName}
             </button> 
      </Link> 
                   
       )
 
 return(
     <div className="container--niche--navbar"   >
      
           <Nichetext />
           <div className="container--niche--tabs" >               
              {Niche}
              <Outlet />
           </div>
     </div>
 )
}
    
 /*NavbarTop codes END */



 function NewsPiece({el}){
 
  
return(
       <>
          <Link  onClick={()=>handleNewsPiece(el)}   className="news--tab--container">   
              <button>
                <img className="image--item"  alt= "pics here" src={require(`../images/image${el.id}/${el.image}`)}  />
              </button>
              <div > 
                      <div className="headline"> {el.headline}</div>
                      <hr />
                      <div className="newsbit--info">{el.news_age}</div>
                      <div className="newsbit--info">{el.pub_date}</div>
                      <div className="newsbit--info">  click for more </div>
                      
              </div>
            
            
          </Link>
          <Outlet />

      </>
)
}


//News Filter START

var newsTab;
//Filter NEWS by Age
 
 
//Filter NEWS by Niche or Region START

 if ( (window.location.pathname==='/')
      ||(window.location.pathname==='/World/All_News')
      ||(window.location.pathname==='/World/All_Niche') ){ 
  newsTab=  AgeFilter()
  .map( (el, id)=><NewsPiece key={id} el={el} />  )
 }

 else if (active_region!=='World' 
          && ((window.location.pathname=== '/'+active_region+'/All_News')
              ||(window.location.pathname=== '/'+active_region+'/All_Niche') )){ 
         newsTab= AgeFilter()
         .filter(el=> (el.region===active_region) )
          .map( (el, id)=><NewsPiece key={id} el={el} />  )
}
 
   

 else if ( (window.location.pathname===('/World/'+active_niche)) && (active_niche!=='All_Niche'||'All_News')){ 
  newsTab=  AgeFilter()
  .filter(el=> (el.niche===active_niche) )
  .map( (el, id)=><NewsPiece key={id} el={el} />  )
 }
  
 else{ 
   newsTab=  AgeFilter()
  .filter(el=> (el.region===active_region) )
  .filter(el=> (el.niche===active_niche) )
  .map( (el, id)=><NewsPiece key={id} el={el} />  ) }
       
   
   
  function handleNewsPiece({id}){
    window.location.pathname ='/'+active_region+'/'+active_niche+'/'+id
      setActive_Id(prevId=>id) }


/* Full story Component START*/
  function FullStory(props){     
  return(
     <>
        
       <div  className="full--story" >
 
            <div>
                  <br />  
                          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                
                                
                                <Link to={'/'+active_region+'/'+active_niche} style ={{marginLeft:'8px'}} className='home'
                                        onClick={returnBack}>
                                          BACK
                                </Link> 
                                <Outlet />

                                <Link  to={'/Africa/All'} style ={{marginLeft:'8px' }} className='home'
                                      onClick={returnHome} >
                                          Home
                                </Link>
                          </div>
                  <br />
                  <hr />

                          <div style ={{marginLeft:'12px'}}>{news_data[props.storyId-1].story}</div>

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Link to={'/'+active_region+'/'+active_niche} style ={{marginLeft:'8px'}} className='home'
                                        onClick={returnBack}>
                                          BACK
                                </Link>  
                        </div>              
            </div>
                
 
        </div>
     </>
     
  )
 }



   function returnHome(){
    setShowFullStory(!showfullstory)
   window.location.pathname='/World/All_Niche'
  }

   function returnBack(){
    setShowFullStory(!showfullstory)
    window.location.pathname='/'+active_region+'/'+active_niche
   }
   
   //Code to enable display of full story for external requests
   (PathObject().region && PathObject().niche && PathObject().id )
   && setTimeout(()=>{
                        setShowFullStory(false)  
                       },0)
   
  return (


       <div className='main--container'>
           {showfullstory && <div> <NicheNavbar /> </div>}

                  <div className='status--bar' >
                        
                        {!showfullstory? (<div>Here is your story</div>)
                          :(`we found you  ${newsTab.length} ${active_niche} stor${newsTab.length>1?'ies':'y'} from ${active_region}`)
                        }
                   </div>
           <div className="Super--container">
           
           {showfullstory?  
                     (  <>                  
                                
                                <RegionNavBar />
                                <div className="news--container"> 
                                {newsTab}
                                </div> 
                      </>) :
                      ( <FullStory storyId={active_id}   /> )
                      
                       }
                    
                          
          </div>
       </div>      
  )

}

export default BMain