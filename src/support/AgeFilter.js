import news_data from '../components/news_data'

export default function AgeFilter(){ 

    //news_data.news_age returns a string
    //of the form '3 weeks ago'
    let nowOld=news_data.filter(el=> {
        return  el.news_age.split(' ')[1].slice(0,3)==='now'
       }).sort((a,b)=>{
        return a.news_age.split(' ')[0]-b.news_age.split(' ')[0]
     })

    let minOld=news_data.filter(el=> {
      return  el.news_age.split(' ')[1].slice(0,3)==='min'
        
       }).sort((a,b)=>{
        return a.news_age.split(' ')[0]-b.news_age.split(' ')[0]
     })

    

    let hourOld=news_data.filter(el=> {
        return  el.news_age.split(' ')[1].slice(0,4)==='hour'          
      }).sort((a,b)=>{
        return a.news_age.split(' ')[0]-b.news_age.split(' ')[0]
     })

   let dayOld=news_data.filter(el=> {
        return  el.news_age.split(' ')[1].slice(0,3)==='day'          
      }).sort((a,b)=>{
        return a.news_age.split(' ')[0]-b.news_age.split(' ')[0]
     })

   let weekOld=news_data.filter(el=> {
        return  el.news_age.split(' ')[1].slice(0,4)==='week'        
      }).sort((a,b)=>{
        return a.news_age.split(' ')[0]-b.news_age.split(' ')[0]
     })

   let monthOld=news_data.filter(el=> {
        return  el.news_age.split(' ')[1].slice(0,5)==='month'       
      }).sort((a,b)=>{
        return a.news_age.split(' ')[0]-b.news_age.split(' ')[0]
     })

   let yearOld=news_data.filter(el=> {
        return  el.news_age.split(' ')[1].slice(0,4)==='year'         
      }).sort((a,b)=>{
        return a.news_age.split(' ')[0]-b.news_age.split(' ')[0]
     })
 

    let filteredNews= nowOld.concat(minOld,hourOld,dayOld,weekOld,monthOld,yearOld)
        
  
return  filteredNews}




