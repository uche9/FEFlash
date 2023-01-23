export default function Footer(){

    return(
        <div className= "footer--container">
             <div>  Contact  </div>
                 <br />
                 <hr /> 
             <h1 className="contact--container">  
                 <br />
                 <br />
                 <hr />
                 <a href='mailto:kwicknewsnetwork@gmail.com' >
                    <img src={require('../logo/gmail.png') } alt='contact icon'    style={{textAlign:'center',width:'80px', height:'80px' }}/>
                </a>

                <a href='https://www.facebook.com/profile.php?id=100089358050735' >
                    <img src={require('../logo/facebook.png') } alt='contact icon'    style={{textAlign:'center',width:'80px', height:'80px' }}/>
                </a>

                <a href='https://www.linkedin.com/in/kwick-news-network-117353263' >
                    <img src={require('../logo/linkedin.png') } alt='contact icon'    style={{textAlign:'center',width:'80px', height:'80px' }}/>
                </a>
                 <br />
                 <hr />
                 
             </h1>
             <h2 style={{textAlign:'center', fontSize:'12px'}}>Ecube media production 2022-2023 </h2>
        </div>
    )
}