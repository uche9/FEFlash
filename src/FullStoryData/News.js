import ShareStory from '../support/ShareStory'
import news_data from '../components/news_data'
import stories from './stories'

export default function News({id}){
    return(
        <>  
            <ShareStory  
                 url={URL} 
                 headline={news_data[id-1].headline} 
                 image={ 
                          <img className='image--item' 
                           src={require(`../images/image${id}/${news_data[id-1].image}`)} style={{marginBottom:'10px', width:'320px', height:'170px' ,}}  alt='headline_photo' 
                           />
                       }
            />

            <h3 style ={{margin:'8px', padding:'3px' ,fontSize:'22px'}}>{news_data[id-1].headline}</h3>
            <h5 style ={{margin:'8px',fontSize:'16px'}}>{news_data[id-1].news_age}</h5>
            <p style ={{margin:'8px',fontSize:'18px'}}>By : <span style={{fontWeight: '900'}}>{news_data[id-1].author}</span></p>
            <br />
                <div className='news--body' >
                      <img className='image--item' src={require(`../images/image${id}/${news_data[id-1].image}`)} style={{marginBottom:'10px', width:'100%', aspectRatio:'2' }}  alt='headline_photo' />
                            <div>{news_data[id-1].image_tag}</div>
                            <br />
                            <br />
                            
                      <span > 
                            <br />
                                <div  style={{boxShadow:'2px 3px 3px', paddingRight:'15px', fontSize:'22px'}}> 
                                      {stories[id-1].story }
                                </div>
                            <br />
                            <hr />
                            <p style ={{marginLeft:'8px'}}>By : <span style={{fontWeight: '900'}}>{news_data[id-1].author}</span></p>   
                      </span>
                      <h5 >{news_data[id-1].news_age}</h5>

                </div>
                   
            <h2> </h2>
        </>
    )
}
