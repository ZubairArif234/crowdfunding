
import arrow from './images/arrow.png'


const Comeandjoinus = () =>{
    return(
        <div className="comeandjoinusmaindiv">
            <p className="comeandjoinustoptext">Make Clean World</p>
            <p className="comeandjoinusbelowtext">Please Come & Join WIth Us</p>
            {/* <button></button> */}
            <button className='blogarrow comeandjoinusbtn '>apply today <img className='blogarrobtn comeandjoinusbtnarrow' src={arrow} /></button>
        </div>
    )
}
export default Comeandjoinus