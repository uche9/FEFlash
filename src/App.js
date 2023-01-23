
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react'
import Header from './components/Header';
//import Main from './components/Main';
import BMain from './components/BMain';
import Footer from './components/Footer';
import MyDate from './components/MyDate';
import PathObject from './routes/RegionRoute'

function App() {
   
  return (
   <div>
           <BrowserRouter>
               <Routes>
                           <Route exact path='/' element={  <>
                                
                                                   <Header /> 
                                                   <MyDate />
                                                   <BMain /> 
                                                   <Footer/> 
                                                     </>
                                             } />
                           <Route path='*' element={  <>
                                                 
                                                   <Header /> 
                                                   <MyDate />
                                                   <BMain /> 
                                                   <Footer/> 
                                                     </>
                                             } />
                           <Route exact  path= {'/'+PathObject().region} element={
                                                                 <> 
                                                                 <Header /> 
                                                                <MyDate />
                                                                <BMain /> 
                                                                <Footer/> 
                                                           </>
                                                            } />
                         <Route  exact path= {'/'+PathObject().region +'/'+PathObject().niche} element={
                                                                 <>  
                                                                 <Header /> 
                                                               <MyDate />
                                                               <BMain /> 
                                                               <Footer/>   
                                                           </>
                                                            } />

                       <Route exact path= {'/'+PathObject().region +'/'+PathObject().niche +'/'+PathObject().id} element={
                                                                 <> 
                                                                 
                                                                 <Header /> 
                                                                 <MyDate />
                                                                 <BMain /> 
                                                                 <Footer /> 
                                                           </>
                                                            } />                     
                                           
               </Routes>
           </BrowserRouter>
                        
   </div>
  );
}

export default App;
