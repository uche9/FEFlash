


function PathObject (){
    
    var pname=window.location.pathname;
    
        
    let arr1=pname.indexOf('/')
    let arr2=pname.indexOf('/', arr1+1)
    let aregion;
    if (arr2===-1){
        aregion=pname.slice(arr1+1,pname.length)
    }
    else{ aregion=pname.slice(arr1+1,arr2)}
    
    let arr3=pname.indexOf('/', arr2+1) 
    let aniche;
   
    if (arr3===-1){
        aniche= pname.slice(arr2+1,pname.length);
    }
     else{
        aniche= pname.slice(arr2+1,arr3);             
    }

    let arr4=pname.indexOf('/', arr3+1)
    let aid;
    
    if (arr4===-1){
        aid= pname.slice(arr3+1,pname.length);
    }
     else{
        aid= pname.slice(arr3+1,arr4)
   }

   

  /* for(let x of news_data)
       
  */

let pobject={
    region :aregion,
    niche:aniche,
    showfullstory: true,
    id:aid
}


         
return pobject}




export default PathObject