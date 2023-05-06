








const Catogoriesblogpage = () =>{
  
   const catogories = [ 
    { name:'lifestyle', number:'78'},
    { name:'travel', number:'42'},
    { name:'fashion', number:'35'},
    { name:'music', number:'85'},
    { name:'branding', number:'05'},

]
    return(
        <div  className='blogpagesearchboxmaindiv'>
            <p className='ourfeaturetextinvestblog'><span className='featuredashblog'></span>Categories</p>
            <div className='instagramfeedbelogpagediv'>

              <ul className="catagoriesullist">
                {
                    catogories.map( (x)=>{
return(

    <li className="catagoieslistblogpage">
                    <p className="catogorieslisttext">{x.name}</p>
                    <p className="catogorieslisttext">{x.number}</p>
                </li>
                    )
                    })
                }
              </ul>
        </div>
        </div>
    )
}

export default Catogoriesblogpage