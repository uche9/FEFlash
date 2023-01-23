

export default function TimeStamp(dstring){
               
 /*This programme returns the age of an event/obj 
 *First create date string to refernce time of object/event creation
 *(2)PARSE date string to get time in milliseconds between 1970 Jan 01 and reference
 *(3)Get total millsec from Jan 01, 1970 till date 
 *Calcualte the difference (3)-(2)
 *Convert the difference to years, months, weeks,..,minutes
 *render the age giving preference in the order years, months, weeks,..,minutes
 */

 //let dstring=new Date(2022,11,23,14,40)  
 
 let dref=Date.parse(dstring);
 let dcurr=Date.now();
 let diff=dcurr-dref;
 

/* Convert interval to age in: year,month,week,days,hours,mins
* constants
* 1 year=31 557 600 000ms
* 1 month=2 629 800 000ms
* 1 week=604 800 016.56ms
* 1 day=86 400 000ms
* 1 hour=3 600 000ms
* 1 minute=60 000ms
*/
let a=31557600000 , b=2629800000, c=604800016.56, d=86400000, e=3600000, f=60000;
    

 let years=Math.floor(diff/a);
     diff=diff-years*a;

 let months=Math.floor(diff/b);
     diff=diff-months*b;
     
 let weeks=Math.floor(diff/c);
     diff=diff-weeks*c;
     
 let days=Math.floor(diff/d);
     diff=diff-days*d;
     
 let hours=Math.floor(diff/e);
     diff=diff-hours*e;
     
 let minutes=Math.floor(diff/f);
  
 
 let Age={
      Years:years,
      Months:months,
      Weeks:weeks,
      Days:days,
      Hours:hours,
      Minutes:minutes
     }
 
// Display Age variable

   let age;
   let text;
   if (Age.Years>0) {
       age=Age.Years;
       text=`${age} year ${age>1? 's':''} ago`;
      }
   else if(Age.Months>0) {
       age=Age.Months;
       text=`${age} month${age>1? 's':''} ago`;
      }

  else if(Age.Weeks>0) {
       age=Age.Weeks;
       text=`${age} week${age>1? 's':''} ago`;
      }
  else if(Age.Days>0) {
        age=Age.Days;
        text=`${age} day${age>1? 's':''} ago`;
       }
   else if(Age.Hours>0) {
       age=Age.Hours;
       text=`${age} hour${age>1? 's':''} ago`;
      }
    else if(Age.Minutes>0) {
       age=Age.Minutes;
       text=`${age} minute${age>1? 's':''} ago`;
    }
    

   else{
    text=`now`;
   }

 return   (
               
                  text
                 
              
 )
}