






import popularfeedimgone from './images/popularfeedimgone.png'





const Popularfeedblogpage = () =>{
  
    const catogories = [ 
     { name:'lifestyle', number:'78'},
     { name:'travel', number:'42'},
     { name:'fashion', number:'35'},
     { name:'music', number:'85'},
     { name:'branding', number:'05'},
 
 ]
     return(
         <div  className='blogpagesearchboxmaindiv'>
             <p className='ourfeaturetext'><span className='featuredash'></span>Popular Feeds</p>
             <div className='instagramfeedbelogpagediv'>
 
               <ul className="catagoriesullist">
       
 
     <li className="catagoieslistblogpage">
        <img className='popularfeedimg' src={popularfeedimgone}/>
        <div className='popularfeedlistinnerdiv'>

                     <p className="popularcardlisttext">Lorem ipsum dolor sit cing elit, sed do.</p>
                     <p className="popularcardlistbelowtext">October 18, 2018</p>
        </div>
                 </li>
     <li className="catagoieslistblogpage">
        <img className='popularfeedimg' src={popularfeedimgone}/>
        <div className='popularfeedlistinnerdiv'>

                     <p className="popularcardlisttext">Lorem ipsum dolor sit cing elit, sed do.</p>
                     <p className="popularcardlistbelowtext">October 18, 2018</p>
        </div>
                 </li>
     <li className="catagoieslistblogpage">
        <img className='popularfeedimg' src={popularfeedimgone}/>
        <div className='popularfeedlistinnerdiv'>

                     <p className="popularcardlisttext">Lorem ipsum dolor sit cing elit, sed do.</p>
                     <p className="popularcardlistbelowtext">October 18, 2018</p>
        </div>
                 </li>
                    
               </ul>
         </div>
         </div>
     )
 }
 
 export default Popularfeedblogpage