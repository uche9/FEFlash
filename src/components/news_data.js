import TimeStamp from '../support/TimeStamp'

import News from '../FullStoryData/News'


 const news_data =[
      
             {
              id:1,
              region:'Africa',
              niche:'Sports',
              image: "image1.png",
              headline:"World Cup 2022: Six things Africa learned at historic finals" ,
              news_age: TimeStamp (new Date(2023,0,18,12,22)),
              author:'Nigel Bidman',
              story:<News id={1}/> 
              },

        
             {
              id:2,
              region:'USA',
              niche:'Business',
              image: "image2.png",
              headline:"Bugatti is auctioning off its last purely gas-powered car and it's accidentally one-of-a-kind" ,
              news_age: TimeStamp (new Date(2023,0,16,5,55)),
              author:'Peter Valdes-Dapena',
              story:<News id={2}/>
            },
        
               
             {
              id:3,
              region:'Africa',
              niche:'Education',
              image: "image3.png",
              headline:"Nelly Cheboi, who creates computer labs for Kenyan schoolchildren, is CNN's Hero of the Year" ,
              news_age: TimeStamp (new Date(2022,11,24,5,55)),
              author:' Tricia Escobedo',
              story:<News id={3}/>
            },
       
               
             {
              id:4,
              region:'Africa',
              niche:'Fashion',
              image: "image4.png",
              headline:"Mission to preserve, share and protect African textile legacies" ,
              news_age: TimeStamp (new Date(2023,0,18,5,55)),
              author:'Ijeoma Thomas-Odia',
              story:<News id={4}/>
            },

       
              {
               id:5,
               region:'Africa',
               niche:'Technology',
               image: "image5.png",
               headline:'The future of businesses as Africa embraces technology' ,
               news_age: TimeStamp (new Date(2023,0,18,12,55)),
               author:'Alan Chekwech',
               story:<News id={5}/>
            },
       
               
              {
               id:6,
               region:'Nigeria',
               niche:'Business',
               image: "image6.png",
               headline:"Shell pays 15 mln euros in compensation to Nigerian farmers" ,
               news_age: TimeStamp (new Date(2023,0,19,0,55)),
               author:'By Rédaction Africanews',
               story:<News id={6}/>
            },
              
              {
               id:7,
               region:'Africa',
               niche:'Technology',
               image: "image7.png",
               headline:"Lowering prosthetic costs through 3D technology" ,
               news_age: TimeStamp (new Date(2023,0,16,12,5,55)),
               author:'Wandiswa Ntengento',
               story:<News id ={7}/>
            },
              
                      
            {
               id:8,
               region:'Africa',
               niche:'Sports',
               image: "image8.png",
               headline:"Former South African herdsman prepares to sail across Atlantic" ,
               news_age: TimeStamp (new Date(2022,11,24,5,55)),
               author:'Daniel Bellamy',
               story:<News id={8}/>
            }, 
            
            {
              id:9,
              region:'Africa',
              niche:'Faith',
              image: "image9.png",
              headline:"Ghana police ban harmful New Year prophecies" ,
              news_age: TimeStamp (new Date(2022,11,24,5,55)),
              author:'Dickens Olewe',
              story:<News id={9}/>
           },  

           {
            id:10,
            region:'China',
            niche:'Technology',
            image: "image10.png",
            headline:"China must raise self-reliance in agricultural technology, Xi says " ,
            news_age: TimeStamp (new Date(2022,11,24,5,55)),
            author:'Reuters',
            story:<News id={10}/>
         },  

         {
          id:11,
          region:'China',
          niche:'Technology',
          image: "image11.png",
          headline:"US-China chips saga" ,
          news_age: TimeStamp (new Date(2022,11,24,5,55)),
          author:'Reuters',
          story:<News id={11}/>
       },

       {
        id:12,
        region:'China',
        niche:'Education',
        image: "image12.png",
        headline:"Educational cooperation between Pakistan, China promotes high-quality CPEC development, says expert",
        news_age: TimeStamp (new Date(2022,11,24,5,55)),
        author:'Raheela Nazir',
        story:<News id={12}/>
     }
     ,

       {
         id:13,
         region:'Nigeria',
         niche:'Economy',
         image: "image13.png",
         headline:" SOKOTO, Nigeria: Old notes: Reconsider Jan. 31 deadline, Sultan tells CBN",
         news_age: TimeStamp (new Date(2023,0,20,1,1,5)),
         author:'Abubakar Auwal',
         story:<News id={13}/>
       } 
       ,
       {
         id:14,
         region:'Nigeria',
         niche:'Economy',
         image: "image14.png",
         headline: 'ABUJA, Nigeria:Gradual removal of petrol subsidy starts April —FG',
         news_age: TimeStamp (new Date(2023,0,20,1,35,5)),
         author:'Emeka Anaeto',
         story:<News id={14}/>
       } 

       ,
       {
         id:15,
         region:'Africa',
         niche:'Fashion',
         image: "image15.png",
         headline: 'DAKAR, Senegal:Dakar is reclaiming its place as the cultural capital of Africa',
         news_age: TimeStamp (new Date(2023,0,20,2,15,5)),
         author:'Bird Story Agency',
         story:<News id={15}/>
       },

       {
         id:16,
         region:'Canada',
         niche:'Economy',
         image: "image16.png",
         headline: 'Canada: CRS Score Plummets As Canada Conducts Second Express Entry Draw In A Week',                            
         news_age: TimeStamp (new Date(2023,0,20,2,33,5)),
         author:'Collin R. Singer',
         story:<News id={16}/>
       },

       {
         id:17,
         region:'USA',
         niche:'Technology',
         image: "image17.png",
         headline:'USA : Apple unveils new iPhones, Apple Watches and AirPods'  ,         
         news_age: TimeStamp (new Date(2023,0,20,3,13,5)),
         author:'Samantha Murphy Kelly',
         story:<News id={17}/>
       } 

       ,

       {
         id:18,
         region:'Canada',
         niche:'Life_Style',
         image: "image18.png",
         headline:'Canada : These are the top 20 fastest-growing jobs in Canada for 2023: LinkedIn'  ,         
         news_age: TimeStamp (new Date(2023,0,20,21,6,5)),
         author:'Hayatullah Amanat ',
         story:<News id={18}/>
       } 
       ,

       {
         id:19,
         region:'Nigeria',
         niche:'Fashion',
         image: "image19.png",
         headline:'Find the Bob Haircut That Complements Your Face Shape With This Guide',         
         news_age: TimeStamp (new Date(2023,0,21,1,0,0)),
         author:'Mary Honkus',
         story:<News id={19}/>
       } 

       ,

       {
         id:20,
         region:'Nigeria',
         niche:'Politics',
         image: "image20.png",
         headline:'PVC Collection: Lagos Govt Declares Work-Free Days',         
         news_age: TimeStamp (new Date(2023,0,21,1,40,0)),
         author:'Emmanuel Egobiambu',
         story:<News id={20}/>
       } ,
            
        {
        id:21,
        region:'Africa',
        niche:'Business',
        image: "image21.png",
        headline:'Djibouti signs $1bn rocket deal with Hong Kong company',         
        news_age: TimeStamp (new Date(2023,0,23,10,20,0)),
        author:'Leo Komminoth',
        story:<News id={21}/>
      } , 
            
      {
        id:22,
        region:'Africa',
        niche:'Economy',
        image: "image22.png",
        headline:"AfDB Tips Senegal, Mozambique Ahead Of Nigeria In Gas Investment ",         
        news_age: TimeStamp (new Date(2023,0,23,10,50,0)),
        author:' Chika Izuora',
        story:<News id={22}/>
      },

      {
        id:23,
        region:'Africa',
        niche:'Education',
        image: "image23.png",
        headline:"AfDB President calls for adequate funding of education in Africa",         
        news_age: TimeStamp (new Date(2023,0,23,11,34,0)),
        author:'James Ogunnaike',
        story:<News id={23}/>
      },

      {
        id:24,
        region:'Africa',
        niche:'Life_Style',
        image: "image24.png",
        headline:"UNESCO names Senegal as the true home of Jollof Rice over Ghana and Nigeria",         
        news_age: TimeStamp (new Date(2023,0,23,11,44,0)),
        author:'Victor Oluwole',
        story:<News id={24}/>
      },

      {
        id:25,
        region:'Africa',
        niche:'Entertainment',
        image: "image25.png",
        headline:"Wizkid announces joint tour with Davido",         
        news_age: TimeStamp (new Date(2023,0,25,2,30,0)),
        author:'Adeayo Adebiyi',
        story:<News id={25}/>
      }, 
      {
        id:26,
        region:'World',
        niche:'Life_Style',
        image: "image26.png",
        headline:"Top 100 Companies to Watch for Remote Jobs in 2023",         
        news_age: TimeStamp (new Date(2023,0,25,3,30,0)),
        author:'Jessica Howington',
        story:<News id={26}/>
      },
      {
        id:27,
        region:'World',
        niche:'Economy',
        image: "image27.png",
        headline:"Richest Country in the World 2023",         
        news_age: TimeStamp (new Date(2023,0,25,3,30,0)),
        author:'Bhupender Kumar',
        story:<News id={27}/>
      },
      
      {
        id:28,
        region:'USA',
        niche:'Business',
        image: "image28.png",
        headline:"How Microsoft could use ChatGPT to supercharge its products",         
        news_age: TimeStamp (new Date(2023,0,26,14,30,0)),
        author:'Samantha Murphy Kelly',
        story:<News id={28}/>
      },

      {
        id:29,
        region:'USA',
        niche:'Economy',
        image: "image29.png",
        headline:"US economy likely slowed but still posted solid growth in Q4",         
        news_age: TimeStamp (new Date(2023,0,26,14,10,0)),
        author:'PAUL WISEMAN',
        story:<News id={29}/>
      },

      {
        id:30,
        region:'USA',
        niche:'Education',
        image: "image30.png",
        headline:"30 Scholarships for African American and Black Students in 2022",         
        news_age: TimeStamp (new Date(2023,0,26,14,40,0)),
        author:'KELLY LAMANO',
        story:<News id={30}/>
      },

      {
        id:31,
        region:'Nigeria',
        niche:'Fashion',
        image: "image31.png",
        headline:"7 Fashion trends in Nigeria that topped the grid in 2022",         
        news_age: TimeStamp (new Date(2023,0,26,15,10,0)),
        author:'Asiat Jimoh',
        story:<News id={31}/>
      },

      {
        id:32,
        region:'Asia',
        niche:'Economy',
        image: "image32.png",
        headline:"Philippines records strongest economic growth in more than 40 years",         
        news_age: TimeStamp (new Date(2023,0,27,10,10,0)),
        author:'Mercedes Ruehl',
        story:<News id={32}/>
      },

      {
        id:33,
        region:'Asia',
        niche:'Politics',
        image: "image33.png",
        headline:"India’s 74th Republic Day celebrations",         
        news_age: TimeStamp (new Date(2023,0,27,10,19,0)),
        author:'AJ news',
        story:<News id={33}/>
      },                                                        
      {
        id:34,
        region:'Europe',
        niche:'Fashion',
        image: "image34.png",
        headline:"Highlights from the Couture Fashion Week at PFW 2023",         
        news_age: TimeStamp (new Date(2023,0,27,11,10,0)),
        author:'Manas Sen Gupta',
        story:<News id={34}/>
      },

      {
        id:35,
        region:'Australia',
        niche:'Sports',
        image: "image35.png",
        headline:"Australian Open: Can anyone stop Novak Djokovic from claiming historic 10th title in Melbourne?",         
        news_age: TimeStamp (new Date(2023,0,27,11,10,0)),
        author:'',
        story:<News id={35}/>
      },
        
      {
        id:36,
        region:'Australia',
        niche:'Business',
        image: "image36.png",
        headline:"The top 5 tech companies to work for in Australia",         
        news_age: TimeStamp (new Date(2023,0,28,2,20,0)),
        author:'Denham Sadler',
        story:<News id={36}/>
      },

      {
        id:37,
        region:'Australia',
        niche:'Economy',
        image: "image37.png",
        image_tag:"",
        headline:"Australia is banking on China’s economy to take off but headwinds are looming",         
        news_age: TimeStamp (new Date(2023,0,28,3,20,0)),
        author:'Peter Hannam',
        story:<News id={37}/>
      },

      {
        id:38,
        region:'Canada',
        niche:'Business',
        image: "image38.png",
        image_tag:"",
        headline:"Bank of Canada raises interest rate again — but hits 'pause' on any more for now",         
        news_age: TimeStamp (new Date(2023,0,28,4,21,0)),
        author:'Pete Evans',
        story:<News id={38}/>
      },
      
      {
        id:39,
        region:'Canada',
        niche:'Business',
        image: "image39.png",
        image_tag:"",
        headline:"Saskatchewan tech companies receive high interest despite layoffs from Meta, Google, others",         
        news_age: TimeStamp (new Date(2023,0,28,4,56,0)),
        author:'Andrew Benson',
        story:<News id={39}/>
      },
      {
        id:40,
        region:'Africa',
        niche:'Business',
        image: "image40.png",
        image_tag:"Oil Rig",
        headline:"Tanzania joins the list of African countries to sign an oil deal in the new year ",         
        news_age: TimeStamp (new Date(2023,0,30,10,40,0)),
        author:'Chinedu Okafor',
        story:<News id={40}/>
      },
      {
        id:41,
        region:'Africa',
        niche:'Technology',
        image: "image41.png",
        image_tag:"",
        headline:"Africa Tech Summit Returns To Nairobi, February 2023",         
        news_age: TimeStamp (new Date(2023,0,30,11,6,0)),
        author:'Simon Cocking',
        story:<News id={41}/>
      },
      {
        id:42,
        region:'Africa',
        niche:'Politics',
        image: "image42.png",
        image_tag:"WADEMOS delegation with representatives of the ECOWAS Department of Political Affairs, Peace and Security, in Abuja, Nigeria.",
        headline:"Nigeria’s elections critical to Liberian, Sierra Leonean 2023 polls – West African coalition",         
        news_age: TimeStamp (new Date(2023,0,30,11,36,0)),
        author:'Premium Times ng',
        story:<News id={42}/>
      },

      {
        id:43,
        region:'Nigeria',
        niche:'Business',
        image: "image43.png",
        image_tag:"CBN Governor, Godwin Emefiele.",
        headline:"New naira: Anger spreads over scarcity, Reps oppose CBN extension",         
        news_age: TimeStamp (new Date(2023,0,30,13,10,0)),
        author:'Friday Olokor, Dirisu Yakubu, Sami Olatunji, Deborah Tolu-Kolawole, Solomon Odeniyi, Lilian Ukagwu, Nathaniel Shaibu, Gift Habib, Edidiong Ikpoto, Anthony Ufoh, Anozie Egole, Damilola Aina, Godwin Isenyo, Tunde Oyekola ',
        story:<News id={43}/>
      },
      {
        id:44,
        region:'Nigeria',
        niche:'Education',
        image: "image44.png",
        image_tag:"Stanbic IBTC Bank",
        headline:"Stanbic IBTC Trustees restates commitment to education",         
        news_age: TimeStamp (new Date(2023,0,30,13,10,0)),
        author:'Tomiwa Ajibola',
        story:<News id={44}/>
      },

      {
        id:45,
        region:'Asia',
        niche:'Technology',
        image: "image45.png",
        image_tag:"",
        headline:"Southeast Asia Startup Ecosystem Continues to Prosper Post-Pandemic",         
        news_age: TimeStamp (new Date(2023,0,30,13,24,0)),
        author:'Hamid Ganji',
        story:<News id={45}/>
      },

      {
        id:46,
        region:'Africa',
        niche:'Life_Style',
        image: "image46.png",
        image_tag:"",
        headline:"One woman’s forgotten story reveals a ... truth about Africa’s written histories",         
        news_age: TimeStamp (new Date(2023,0,31,11,8,0)),
        author:'Joel Cabrita',
        story:<News id={46}/>
      },
      
      {
        id:48,
        region:'Africa',
        niche:'Economy',
        image: "image48.png",
        image_tag:"",
        headline:"What should be the top priority for Africa in 2023?",         
        news_age: TimeStamp (new Date(2023,0,31,14,8,0)),
        author:' NICOLE WINFIELD, JEAN-YVES KAMAKE and NQOBILE NTSHANGASE',
        story:<News id={48}/>
      },

      {
        id:49,
        region:'USA',
        niche:'Entertainment',
        image: "image49.png",
        image_tag:"",
        headline:"Trevor Noah returns as Grammy host with comfort, nervousness",         
        news_age: TimeStamp (new Date(2023,0,31,14,8,0)),
        author:'JONATHAN LANDRUM Jr.',
        story:<News id={49}/>
      },
      {
        id:50,
        region:'USA',
        niche:'Entertainment',
        image: "image50.png",
        image_tag:"",
        headline:"After Tesla price cut, Ford follows suit with Mustang Mach-E",         
        news_age: TimeStamp (new Date(2023,0,31,14,8,0)),
        author:'Tom Krisher',
        story:<News id={50}/>
      },
    ];     

   
    export default news_data;