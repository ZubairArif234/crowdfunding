



// import facebook from './images/facebook.png'
// import twitter from './images/twitter.png'
// import behance from './images/behance.png'
// import linkedin from './images/linkedin.png'
// import youtube from './images/youtube.png'

const Intagramfeedblogpage = () =>{
    const feedarr = ['popular','design' , 'usability' , 'develop' , 'consult' , 'icon' , 'html' , 'ux' , 'business' , 'kit' ,'keyboard' , 'tech']
    return(
        <div  className='blogpagesearchboxmaindiv'>
            <p className='ourfeaturetextinvestblog'><span className='featuredashblog'></span>Instagram Feeds</p>
            <div className='instagramfeedbelogpagediv'>

                {
                    feedarr.map( (x) =>{
return(

    <button className="instagremfeedbtns">{x}</button>
    )
                    })
                }
        </div>
        </div>
    )
}

export default Intagramfeedblogpage