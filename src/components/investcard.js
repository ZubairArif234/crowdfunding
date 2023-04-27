import investbook from './images/investbook.png'

function Investcard ({heading,message,img}){
    return(
        <div className='investcard'>
            <center>

            <img src={img} className='investcardimg'/>
            </center>
            <p className='cardheading'>{heading}</p>
            <p className='cardtext'>{message}</p>
        </div>
    )
}
export default Investcard