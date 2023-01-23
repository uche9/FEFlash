import {Link, Outlet} from 'react-router-dom'
import {useState} from 'react'
import news_data from "./news_data";
import  '../styles/Mystyle.css';
import Nichetext from './Niche'
import RegionText from'./Region'

export default function Main(){

    const [active_id,setActive_Id]=useState(1);
    const [active_niche,setActive_Niche]=useState('All');
    const [showfullstory,setShowFullStory]=useState('fasle');
    const [active_region,setActive_Region]=useState('Africa');
   
    function RegionNavBar(){

      
      function selectRegion(el){
        setActive_Region(el);           
    }  
         
     
         let Regions=[
          'Africa',
          'Asia',
          'Australia',
          'China',
          'Europe',
          'Latin_America',
          'Middle_East',
          'UK',
          'USA']
       
      
      //Conform Region for routing
      let RegionRoute=Regions.map(el=>({
        way: ('/'+el),
        wayName:el
    }))
             
   let  Region=RegionRoute.map(el=> 
                      <Link to = {el.way} className="region_tabs" onClick={()=>selectRegion(el.wayName)}  > {el.wayName}</Link>                  
                           ) 
     
           return(
            <div ClassName="container--left-Navbar">          
                         <RegionText />
                  <div className="container--region--tabs" > 
                         {Region}
                         <Outlet />
                  </div>
            </div>
        )
     }
      

  function NicheNavbar(){
  let Niches=[  
             'All',
             'Education',
             'Business',
             'Sports',
             'Politics',
             'Faith', 
             'Fashion',
             'Technology',
             'Science'
            ];

     function selectNiche(el){
          setActive_Niche(el);
     }

       //Conform Niche routes
   let NicheRoute=Niches.map(el=>({
    way: '/'+active_region+'/'+el,
    wayName:el
}))
    
     

let  Niche=NicheRoute.map(el=> 
  <button className='niche--tabs'>
      <Link to = {el.way} className="niche_tabs" onClick={()=>selectNiche(el.wayName)}  > {el.wayName}</Link> 
  </button>                  
       )
 
 return(
     <div ClassName="container--niche--navbar"   >
           <Nichetext />
           <div className="container--niche--tabs" >               
              {Niche}
              <Outlet />
           </div>
     </div>
 )
}
    
 /*NavbarTop codes END */

 var newsTab;

  if ( active_niche==='All'){ 
  newsTab=  news_data 
  .filter(el=> (el.region===active_region) )
  .map( (el, id)=><NewsPiece key={id} el={el} />  )
 }
  
 else{ 
   newsTab=  news_data 
  .filter(el=> (el.region===active_region) )
  .filter(el=> (el.niche===active_niche) )
  .map( (el, id)=><NewsPiece key={id} el={el} />  ) }
       
   
   
  function handleNewsPiece(x){
       
    setActive_Id(prevId=>x);
     
   } 

function NewsPiece({el}){

    return(
        <>
              <Link to= {'/'+active_region +'/'+active_niche+'/'+active_id}   onClick={()=>handleNewsPiece(el.id)}   className="news--tab--container">   
                  <button>
                    <img className="image--item"  alt= "pics here" src={require(`../images/image${el.id}/${el.image}`)}  />
                  </button>
                  <div > 
                          <div className="headline"> {el.headline}</div>
                          <hr />
                          <div className="newsbit--info">{el.news_age}</div>
                          <div className="newsbit--info">{el.pub_date}</div>
                          <div className="newsbit--info"> click for more</div>
                          
                  </div>
                
                
              </Link>
              <Outlet />

          </>
    )
}

/* Full story Component START*/
function FullStory(props){     
  return(
     <>
        
       <div  className="full--story" >
 
            <div>
                  <br />
                          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Link to = {'/'+active_region+'/'+active_niche}  style ={{marginLeft:'8px' }} className='home'
                                        onClick={toggleFullstory}>
                                          Home
                                </Link>
                          </div>
                  <br />
                  <hr />

                          <div style ={{marginLeft:'12px'}}>{news_data[props.storyId-1].story}</div>

                                     
            </div>
                
 
        </div>
     </>
     
  )
 }

   function toggleFullstory(){
    setShowFullStory(!showfullstory)
    
   }
  

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
                   
                     (<>      
                                
                                <RegionNavBar />
                                <div className="news--container"> 
                                {newsTab}
                                </div> 
                      </>)
                    :
                     ( <FullStory storyId={active_id}   /> )   }    
          </div>
       </div>      
  )
}