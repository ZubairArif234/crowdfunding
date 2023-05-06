


import searchicon from './images/searchicon.png'

const Blogpagesearchbox = () =>{
    return(
        <div className='blogpagesearchboxmaindiv'>
             <p className='ourfeaturetextinvestblog'><span className='featuredashblog'></span>Search Objects</p>
        <div className='blogsearchboxinputandbtn'>
            <input className='blogsearchboxinput' placeholder='Search your keyword...'/>
             <button  className='blogsearchboxbtn'><img className='searchbtnimgicon' src={searchicon}/></button>
        </div>
        </div>
    )
}

export default Blogpagesearchbox